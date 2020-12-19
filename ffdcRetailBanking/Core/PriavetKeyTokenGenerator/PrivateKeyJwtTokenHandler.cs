using ffdcRetailBanking.Core.PrivateKeyJwtToken;
using IdentityModel;
using IdentityModel.AspNetCore.AccessTokenManagement;
using IdentityModel.Client;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.PriavetKeyTokenGenerator
{
	public class PrivateKeyJwtTokenHandler : DelegatingHandler
	{
		private readonly ILogger<PrivateKeyJwtTokenHandler> _logger;
		private readonly IPrivateKeyJwtGenerator _tokenGenerator;
		private readonly IHttpClientFactory _httpClientFactory;
		private readonly IDiscoveryCache _discoveryCache;
		private readonly IClientAccessTokenCache _clientAccessTokenCache;



        public PrivateKeyJwtTokenHandler(ILogger<PrivateKeyJwtTokenHandler> logger,
            IPrivateKeyJwtGenerator tokenGenerator,
            IHttpClientFactory httpClientFactory,
            IDiscoveryCache discoveryCache,
            IClientAccessTokenCache clientAccessTokenCache)
        {
            _logger = logger;
            _tokenGenerator = tokenGenerator;
            _httpClientFactory = httpClientFactory;
            _discoveryCache = discoveryCache;
            _clientAccessTokenCache = clientAccessTokenCache;
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            var token = await RetrieveBearerAccessToken();
            request.SetBearerToken(token);
            return await base.SendAsync(request, cancellationToken);
        }

        private async Task<string> RetrieveBearerAccessToken()
        {
            var cacheId = this.GetType().FullName;
            var clientAccessToken = await _clientAccessTokenCache.GetAsync(cacheId);

            if (clientAccessToken != null)
            {
                return clientAccessToken.AccessToken;
            }

            var disco = await _discoveryCache.GetAsync();
            var tokenEndpoint = disco.TokenEndpoint;

            var http = _httpClientFactory.CreateClient();
            var token = await http.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
            {
                Address = tokenEndpoint,
                ClientAssertion = new ClientAssertion
                {
                    Type = OidcConstants.ClientAssertionTypes.JwtBearer,
                    Value = _tokenGenerator.CreateClientAuthJwt()
                }
            });

            await _clientAccessTokenCache.SetAsync(cacheId, token.AccessToken, token.ExpiresIn);

            if (!token.IsError) return token.AccessToken;

            _logger.LogError(token.Exception, token.ErrorDescription);
            throw new Exception(token.ErrorDescription, token.Exception);
        }
    }
}
