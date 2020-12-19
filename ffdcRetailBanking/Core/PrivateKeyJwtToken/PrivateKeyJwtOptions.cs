using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.PrivateKeyJwtToken
{
    public class PrivateKeyJwtOptions
    {
        public string PrivateKeyPath { get; set; }
        public string JwkKeyId { get; set; }
        public int TokenLifeTimeInMinutes { get; set; } = 1;
        public string ClientId { get; set; }
        public string TokenEndpoint { get; set; }
    }
}
