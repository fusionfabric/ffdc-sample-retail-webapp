using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ffdcRetailBanking.Core.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace ffdcRetailBanking.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public FinastraConfiguration FinastraConfiguration { get; }

        public IndexModel(ILogger<IndexModel> logger,
       FinastraConfiguration configuration)
        {
            _logger = logger;
            FinastraConfiguration = configuration;
        }

        public async Task OnGetAsync()
        {

        }


    }
}
