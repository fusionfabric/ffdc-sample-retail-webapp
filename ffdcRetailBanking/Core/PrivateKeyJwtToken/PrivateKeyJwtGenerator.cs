using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.PrivateKeyJwtToken
{
    public class PrivateKeyJwtGenerator : IPrivateKeyJwtGenerator
    {
        private readonly ILogger<PrivateKeyJwtGenerator> _logger;
        private PrivateKeyJwtOptions _options;

        public PrivateKeyJwtGenerator(ILogger<PrivateKeyJwtGenerator> logger,
            IOptions<PrivateKeyJwtOptions> options)
        {
            _logger = logger;
            _options = options.Value;
        }

        public string CreateClientAuthJwt(PrivateKeyJwtOptions o)
        {
            _options.TokenEndpoint = o.TokenEndpoint ?? _options.TokenEndpoint;
            _options.ClientId = o.ClientId ?? _options.ClientId;
            _options.JwkKeyId = o.JwkKeyId ?? _options.JwkKeyId;
            _options.PrivateKeyPath = o.PrivateKeyPath ?? _options.PrivateKeyPath;
            _options.TokenLifeTimeInMinutes = o.TokenLifeTimeInMinutes; //default if not set or custom

            return CreateClientAuthJwt();
        }

        public string CreateClientAuthJwt()
        {
            _logger.LogTrace("Creating private_key_jwt");

            var rsaCryptoServiceProvider = new RSACryptoServiceProvider();
            try
            {
                var bytes = File.ReadAllBytes(_options.PrivateKeyPath);
                rsaCryptoServiceProvider.ImportRSAPrivateKey(bytes, out _);
            }
            catch (Exception e)
            {
                _logger.LogCritical(e, "Private key PKCS#1 is not found or invalid. Please make sure file exists and in .DER format");
                throw;
            }
            var rsaSecurityKey = new RsaSecurityKey(rsaCryptoServiceProvider)
            {
                KeyId = _options.JwkKeyId // kid value of jwk
            };

            /* https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication
            iss
            REQUIRED. Issuer. This MUST contain the client_id of the OAuth Client.
            sub
            REQUIRED. Subject. This MUST contain the client_id of the OAuth Client.
            aud
            REQUIRED. Audience. The aud (audience) Claim. Value that identifies the Authorization Server as an intended audience. The Authorization Server MUST verify that it is an intended audience for the token. The Audience SHOULD be the URL of the Authorization Server's Token Endpoint.
            jti
            REQUIRED. JWT ID. A unique identifier for the token, which can be used to prevent reuse of the token. These tokens MUST only be used once, unless conditions for reuse were negotiated between the parties; any such negotiation is beyond the scope of this specification.
            exp
            REQUIRED. Expiration time on or after which the ID Token MUST NOT be accepted for processing.
            iat
            OPTIONAL. Time at which the JWT was issued.*/

            var tokenHandler = new JwtSecurityTokenHandler
            {
                TokenLifetimeInMinutes = _options.TokenLifeTimeInMinutes
            };
            var securityToken = tokenHandler.CreateJwtSecurityToken(new SecurityTokenDescriptor
            {
                Issuer = _options.ClientId,
                Subject = new ClaimsIdentity(
                    new List<Claim>
                    {
                        new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Sub,
                            _options.ClientId)
                    }),
                Audience = _options.TokenEndpoint,
                SigningCredentials = new SigningCredentials(rsaSecurityKey, SecurityAlgorithms.RsaSha256),
                Claims = new Dictionary<string, object>
                {
                    { Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString() }
                }
            });
            _logger.LogTrace("private_key_jwt created.");
            var token = tokenHandler.WriteToken(securityToken);
            return token;
        }
    }
}
