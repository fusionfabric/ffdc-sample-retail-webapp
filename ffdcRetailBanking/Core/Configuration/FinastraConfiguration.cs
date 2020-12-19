using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.Configuration
{
    public class FinastraConfiguration
    {
        public FinastraConfiguration()
        {
            Oauth2Configuration = new Oauth2Configuration();
            ApiConfiguration = new ApiConfiguration();
        }
        public Oauth2Configuration Oauth2Configuration { get; set; }
        public ApiConfiguration ApiConfiguration { get; set; }
    }
}
