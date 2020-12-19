using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.PrivateKeyJwtToken
{
	public static class PrivateKeyJwtExtensions
	{
        public static void AddPrivateKeyJwtGenerator(this IServiceCollection services, Action<PrivateKeyJwtOptions> options)
        {
            if (options != null)
            {
                services.Configure(options);
            }

            services.TryAddSingleton<IPrivateKeyJwtGenerator, PrivateKeyJwtGenerator>();
        }
    }
}
