using ffdcRetailBanking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
    public interface IAccountsHttpClient
    {
        Task<List<AccountSummary>> GetAccountSummariesAsync();
        Task<List<AccountDetail>> GetDetailsAsync(string accountId);
        Task<List<AccountBalance>> GetAccountBalances();
        Task<List<AccountInterestPaid>> GetAccountInterestPaids(string accountId);
        Task<List<AccountOverview>> GetAccountOverviews();
        Task<List<AccountTransaction>> GetAccountTransactions(string accountId);
        Task<List<AllAccountsOverview>> GetAllAccountsOverviews();
        Task<List<ExtendedDetailedAccount>> GetExtendedDetailedAccounts(string accountId);
        Task<List<OwnerAddess>> GetOwnerAddesses();
        Task<List<DonnationsBanner>> GetDonnationsBanners(string accountId);
        Task<List<AccountTransactionCheckImage>> GetAccountTransactionCheckImages();
        Task<List<AccountTransactionSaveImage>> GetAccountTransactionSaveImages(string accountId);
        Task<List<AccountTransactionDetail>> GetAccountTransactionDetails();
        Task<List<Address>> GetAddresses(string accountId);
        //Task<List<AccountSummary>> GetAccountSummariesAsync();
     
    }
}
