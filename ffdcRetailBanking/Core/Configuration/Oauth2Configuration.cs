using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.Configuration
{
    public class Oauth2Configuration
    {
        public string Issuer { get; set; }
        public string TokenEndpoint { get; set; }
        public string AuthorityEndpoint { get; set; }
        public ClientCredentials B2C { get; set; }
        public ClientCredentials B2B { get; set; }
        public int PrivateKeyJwtExpirationTimeInMinutes { get; set; } = 5;
        public ClientAuthenticationMethod ClientAuthenticationMethod { get; set; }
    }

    public class ClientCredentials
    {
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string JwkKeyId { get; set; }
        public string PrivateKey { get; set; }
    }

    public enum ClientAuthenticationMethod
    {
        client_secret,
        private_key_jwt
    }
}
