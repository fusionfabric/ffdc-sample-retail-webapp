using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ffdcRetailBanking.Core.Configuration;
using ffdcRetailBanking.Core.HttpClients;
using ffdcRetailBanking.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ffdcRetailBanking.Pages
{
	[Authorize]
	public class AccountModel : PageModel
    {
        private readonly IAccountsHttpClient _accountsHttpClient;

        [BindProperty]
        public string SelectedAccountId { get; set; }

        public List<AccountDetail> AccountDetails { get; set; } = new List<AccountDetail>();
        public IEnumerable<SelectListItem> AccountSummaryListItems { get; private set; }
        public FinastraConfiguration FinastraConfiguration { get; set; }
        public object Token { get; set; }

        public AccountModel(IAccountsHttpClient accountsHttpClient, FinastraConfiguration finastraConfiguration)
        {
            _accountsHttpClient = accountsHttpClient;
            FinastraConfiguration = finastraConfiguration;
        }

        public async Task OnGet()
        {
            await GetAccounts();
            Token = await HttpContext.GetUserAccessTokenAsync();
        }

        public async Task<IActionResult> OnPost()
        {
            List<AccountDetail> details;
            AccountDetails = await _accountsHttpClient.GetDetailsAsync(SelectedAccountId);
            await GetAccounts();
            Token = await HttpContext.GetUserAccessTokenAsync();
            return Page();
        }

        public async Task<IActionResult> OnGetSignOut()
        {
            await HttpContext.SignOutAsync();
            return Redirect("/");
        }

        private async Task GetAccounts()
        {//in prod app make sense to cache this
            var accountSummaries = await _accountsHttpClient.GetAccountSummariesAsync();
            AccountSummaryListItems = accountSummaries.Select(i =>
                new SelectListItem($"{i.Nickname}-{i.AccountType}-{i.formattedAccountNumber}", i.AccountId));
        }


    }
}
