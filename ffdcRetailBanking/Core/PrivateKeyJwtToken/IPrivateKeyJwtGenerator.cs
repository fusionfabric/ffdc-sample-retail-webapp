using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.PrivateKeyJwtToken
{
    public interface IPrivateKeyJwtGenerator
    {
        string CreateClientAuthJwt();
        string CreateClientAuthJwt(PrivateKeyJwtOptions options);
    }
}
