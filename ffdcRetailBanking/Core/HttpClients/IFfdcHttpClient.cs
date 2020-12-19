using ffdcRetailBanking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public interface IFfdcHttpClient
	{
		Task<ClockServiceResponse> GetUtcDateTimeAsync();
	}
}
