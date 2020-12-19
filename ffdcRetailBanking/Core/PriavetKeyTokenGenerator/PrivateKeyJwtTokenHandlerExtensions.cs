using ffdcRetailBanking.Core.HttpClients;
using IdentityModel.Client;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.PriavetKeyTokenGenerator
{
    public static class PrivateKeyJwtTokenHandlerExtensions
    {
        /// <summary>
        /// Registers PrivateKeyJwtTokenHandler for IFfdcHttpClient
        /// It is alternative way how to inject bearer token into outbound request.
        /// This Handler is using DiscoveryCache class to retrieve tokenEndpoint
        /// In this case configuration can have only authority address - all other info can be retrieved from well-known.
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configureHandler"></param>
        /// <returns></returns>
        public static IHttpClientBuilder AddPrivateKeyJwtHttpClient(this IServiceCollection services, Action<PrivateKeyJwtTokenHandlerOptions> configureHandler)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }
            if (configureHandler == null)
            {
                throw new ArgumentNullException(nameof(configureHandler));
            }

            services.Configure(configureHandler);

            services.TryAddSingleton<IDiscoveryCache>(p =>
            {
                var options = p.GetRequiredService<IOptions<PrivateKeyJwtTokenHandlerOptions>>();
                return new DiscoveryCache(options.Value.AuthorityEndpoint,
                    new DiscoveryPolicy
                    {
                        //Finastra's authority and issuer addresses are different
                        ValidateIssuerName = false,
                        ValidateEndpoints = false
                    }
                );
            });

            services.TryAddTransient<PrivateKeyJwtTokenHandler>();
            var builder = services.AddHttpClient<IFfdcHttpClient, FfdcHttpClient>()
                .AddHttpMessageHandler<PrivateKeyJwtTokenHandler>();

            return builder;
        }
    }
}
