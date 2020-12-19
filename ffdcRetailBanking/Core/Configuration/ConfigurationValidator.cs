using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.Configuration
{
    public class ConfigurationValidator : IValidateOptions<FinastraConfiguration>
    {
        public ValidateOptionsResult Validate(string name, FinastraConfiguration options)
        {
            if (string.IsNullOrEmpty(options.ApiConfiguration.BaseUrl))
            {
                return ValidateOptionsResult.Fail("BaseUrl empty");
            }
            if (string.IsNullOrEmpty(options.Oauth2Configuration.TokenEndpoint))
            {
                return ValidateOptionsResult.Fail("TokenEndpoint empty");
            }
            if (string.IsNullOrEmpty(options.Oauth2Configuration.B2B.ClientId))
            {
                return ValidateOptionsResult.Fail("ClientId empty");
            }
            if (string.IsNullOrEmpty(options.Oauth2Configuration.B2B.PrivateKey))
            {
                return ValidateOptionsResult.Fail("PrivateKey empty");
            }
            if (string.IsNullOrEmpty(options.Oauth2Configuration.B2B.JwkKeyId))
            {
                return ValidateOptionsResult.Fail("JwkKeyId empty");
            }
            //etc...
            return ValidateOptionsResult.Success;

        }
    }
}
