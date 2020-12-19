using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ffdcRetailBanking.Core.Configuration;
using ffdcRetailBanking.Core.HttpClients;
using ffdcRetailBanking.Core.PrivateKeyJwtToken;
using Hangfire;
using Hangfire.Dashboard;
using Hangfire.MemoryStorage;
using IdentityModel;
using IdentityModel.AspNetCore.AccessTokenManagement;
using IdentityModel.Client;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using static ffdcRetailBanking.ClientAssertionTokenClientConfigurationService;

namespace ffdcRetailBanking
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //services.AddSingleton<IConnectionManager, ConnectionManager>();
            //services.AddSingleton<IHubNotificationHelper, HubNotificationHelper>();
            services.AddSingleton<INotification, Notification>();

            services.Configure<AuthorizationOptions>(options =>
            {
                options.AddPolicy("somePolicy", policy =>
                {
                    policy.RequireAuthenticatedUser();
                });
            });
            services.AddHangfire(config =>
                 config.SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                 .UseSimpleAssemblyNameTypeSerializer()
                 .UseDefaultTypeSerializer()
                 .UseMemoryStorage());
            //.UseSqlServerStorage(Configuration["Hangfire"])); ;

            services.AddSingleton<IDisplay, Display>();
            services.AddHangfireServer();
            services.AddRazorPages();
            services.AddHttpContextAccessor();

            services.AddCors();

            var finastraConfiguration = new FinastraConfiguration();
            var finastraConfigSection = Configuration.GetSection("Finastra");
            finastraConfigSection.Bind(finastraConfiguration);

            #region Configuration of Configuration -)
            services.Configure<FinastraConfiguration>(finastraConfigSection);
            services.AddSingleton<IValidateOptions<FinastraConfiguration>, ConfigurationValidator>();

            services.TryAddSingleton(provider => provider.GetRequiredService<IOptions<FinastraConfiguration>>().Value);
            #endregion

            // service providing private_key_jwt
            services.AddPrivateKeyJwtGenerator(o =>
            {
                o.TokenEndpoint = finastraConfiguration.Oauth2Configuration.Issuer; // Finastra is validating against Issuer
                o.TokenLifeTimeInMinutes =
                    finastraConfiguration.Oauth2Configuration.PrivateKeyJwtExpirationTimeInMinutes;
            }
            );

            #region B2B token management service configuration
            //for B2B private_key_jwt auth method - register custom client assertion configuration
            if (finastraConfiguration.Oauth2Configuration.ClientAuthenticationMethod ==
                ClientAuthenticationMethod.private_key_jwt)
            {
                services.AddTransient<ITokenClientConfigurationService, ClientAssertionTokenClientConfigurationService>();
            }// client_credentials will use DefaultTokenClientConfigurationService registered on next line 

            services.AddAccessTokenManagement(o =>
            {
                // Here we can register either one client token service or many, depending on configuration 
                // and business needs.
                // This sample registers one client named "finastra_login_service" per auth type.

                //in case of client_secret method - need to provide tokenEndpoint, clientId, secret.
                if (finastraConfiguration.Oauth2Configuration.ClientAuthenticationMethod ==
                    ClientAuthenticationMethod.client_secret)
                {
                    o.Client.Clients.Add("finastra_login_service", new ClientCredentialsTokenRequest
                    {
                        Address = finastraConfiguration.Oauth2Configuration.TokenEndpoint,
                        ClientId = finastraConfiguration.Oauth2Configuration.B2B.ClientId,
                        ClientSecret = finastraConfiguration.Oauth2Configuration.B2B.ClientSecret
                    });
                }
                else
                {
                    // this token client configured to use private_jwt method.
                    // in this case we need only tokenEndpoint - credentials set via private_key_jwt.
                    // ClientAssertion added in ClientAssertionTokenClientConfigurationService.GetClientCredentialsRequestAsync
                    // see class ClientAssertionTokenClientConfigurationService
                    o.Client.Clients.Add("finastra_login_service", new ClientCredentialsTokenRequest
                    {
                        Address = finastraConfiguration.Oauth2Configuration.TokenEndpoint
                    });
                }
            });

            // B2B flow config. Typed client registration and link to TokenManagementService. 
            services.AddHttpClient<IFfdcHttpClient, FfdcHttpClient>()
                .AddClientAccessTokenHandler("finastra_login_service");

            ////alternative way - use custom httpMessageHandler for outbound requests.
            ////This sample implementation can use service discovery, instead of explicit token, issuer addresses.
            //services.AddPrivateKeyJwtHttpClient(o =>
            //{
            //    o.AuthorityEndpoint = finastraConfiguration.Oauth2Configuration.AuthorityEndpoint;
            //});
            #endregion   


            #region B2C OIDC config start
            services.AddAuthentication(o =>
            {
                o.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
            })
               .AddCookie()
               .AddOpenIdConnect(o =>
               {
                   o.ClientId = finastraConfiguration.Oauth2Configuration.B2C.ClientId;
                   o.ClientSecret = finastraConfiguration.Oauth2Configuration.B2C.ClientSecret;
                   o.Authority = finastraConfiguration.Oauth2Configuration.AuthorityEndpoint;
                   o.CallbackPath = "/signin-oidc"; // this path or your custom one should be registered in FFDC application configuration. See FFDC application registration doc.
                   o.SaveTokens = true;
                   o.ResponseType = OpenIdConnectResponseType.Code;
                   // Indicates a Query Response see: http://openid.net/specs/openid-connect-core-1_0.html#ImplicitAuthResponse.
                   // other variant - form POST.
                   o.ResponseMode = OpenIdConnectResponseMode.Query;

                   o.Events.OnAuthorizationCodeReceived = context =>
                   {
                       if (finastraConfiguration.Oauth2Configuration.ClientAuthenticationMethod ==
                           ClientAuthenticationMethod.client_secret)
                       {
                           return Task.CompletedTask;
                           //for client secret no need to set clientAssertion.
                       }

                       var tokenGenerator = context.HttpContext.RequestServices.GetService<IPrivateKeyJwtGenerator>();
                       context.TokenEndpointRequest.ClientAssertionType = OidcConstants.ClientAssertionTypes.JwtBearer;
                       context.TokenEndpointRequest.ClientAssertion = tokenGenerator.CreateClientAuthJwt(new PrivateKeyJwtOptions
                       {
                           ClientId = finastraConfiguration.Oauth2Configuration.B2C.ClientId,
                           JwkKeyId = finastraConfiguration.Oauth2Configuration.B2B.JwkKeyId,
                           PrivateKeyPath = finastraConfiguration.Oauth2Configuration.B2B.PrivateKey
                           //other params if they are different in config
                       });
                       return Task.CompletedTask;
                   };
               });

            //B2C http client registration and attach userAccessTokenHandler
            //OAUTH configuration is taken from OpenIdConnect Config above
            services.AddHttpClient<IAccountsHttpClient, AccountsHttpClient>()
                .AddUserAccessTokenHandler();
            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,

               IBackgroundJobClient backgroundJobClient,
            IRecurringJobManager recurringJobManager,
            IServiceProvider serviceProvider)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseCors(options => options.WithOrigins("http://localhost:3002").AllowAnyMethod().AllowAnyHeader());

            app.UseStaticFiles();

            app.UseRouting();
            app.UseHangfireDashboard();
            backgroundJobClient.Enqueue(() => Console.WriteLine("Hello Hanfire job!"));
            recurringJobManager.AddOrUpdate(
             "Your next Donation comes up in the next 12 months",
             () => serviceProvider.GetService<IDisplay>().Print($""), Cron.Minutely());

            //"* * * * *"

            //app.UseHangfireDashboard();
            app.UseHangfireServer();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapHangfireDashboard("", new  DashboardOptions
             {

                    Authorization = new[] { new HangfireAuthorizationFilter("somePolicy"), },
                });
            });

           


        }
    }


    public class ClientAssertionTokenClientConfigurationService : DefaultTokenClientConfigurationService
    {
        private readonly IPrivateKeyJwtGenerator _privateKeyJwtGenerator;
        private readonly FinastraConfiguration _finastraConfiguration;

        public ClientAssertionTokenClientConfigurationService(IOptions<AccessTokenManagementOptions> accessTokenManagementOptions,
            IOptionsMonitor<OpenIdConnectOptions> oidcOptions,
            IAuthenticationSchemeProvider schemeProvider,
            IPrivateKeyJwtGenerator privateKeyJwtGenerator,
            FinastraConfiguration finastraConfiguration
        ) : base(accessTokenManagementOptions, oidcOptions, schemeProvider)
        {
            _privateKeyJwtGenerator = privateKeyJwtGenerator;
            _finastraConfiguration = finastraConfiguration;
        }

        // need this override to recalculate ClientAssertion.Value in B2B flow.
        public override async Task<ClientCredentialsTokenRequest> GetClientCredentialsRequestAsync(string clientName)
        {
            var r = await base.GetClientCredentialsRequestAsync(clientName);
            r.ClientAssertion.Type = OidcConstants.ClientAssertionTypes.JwtBearer;
            r.ClientAssertion.Value = _privateKeyJwtGenerator.CreateClientAuthJwt(new PrivateKeyJwtOptions
            {
                JwkKeyId = _finastraConfiguration.Oauth2Configuration.B2B.JwkKeyId,
                ClientId = _finastraConfiguration.Oauth2Configuration.B2B.ClientId,
                PrivateKeyPath = _finastraConfiguration.Oauth2Configuration.B2B.PrivateKey
            });
            return r;
        }


        public class HangfireAuthorizationFilter : IDashboardAuthorizationFilter
        {
            private string PolicyName { get; }

            public HangfireAuthorizationFilter(string policyName)
            {
                this.PolicyName = policyName;
            }
            public bool Authorize(DashboardContext context)
            {
                var httpContext = context.GetHttpContext();
                var authService = httpContext.RequestServices.GetRequiredService<IAuthorizationService>();
                var authorizationResult = authService.AuthorizeAsync(httpContext.User, this.PolicyName).ConfigureAwait(false).GetAwaiter().GetResult();
                var isAuthorized = authorizationResult.Succeeded;

                if (!isAuthorized)
                {
                    httpContext.ChallengeAsync().ConfigureAwait(false).GetAwaiter().GetResult();
                }
                return true; //always return true
            }
        }
    }
}
