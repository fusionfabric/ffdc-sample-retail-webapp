using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ffdcRetailBanking.Core.Configuration;
using ffdcRetailBanking.Core.HttpClients;
using ffdcRetailBanking.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ffdcRetailBanking.Pages
{
    public class UtcDateTimeModel : PageModel
    {
        public ClockServiceResponse ClockServiceResponse { get; set; }

        public string Token { get; set; }

        private readonly IFfdcHttpClient _ffdcHttpClient;
        public FinastraConfiguration FinastraConfiguration { get; }

        public UtcDateTimeModel(IFfdcHttpClient ffdcHttpClient, FinastraConfiguration finastraConfiguration)
        {
            _ffdcHttpClient = ffdcHttpClient;
            FinastraConfiguration = finastraConfiguration;
        }

  //      public async Task OnGet()
  //      {
		//	ClockServiceResponse = await _ffdcHttpClient.GetUtcDateTimeAsync();

		//	Token = await HttpContext.GetClientAccessTokenAsync();
		//}

    }
}
