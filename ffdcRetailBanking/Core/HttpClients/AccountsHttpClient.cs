using ffdcRetailBanking.Core.Configuration;
using ffdcRetailBanking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
    public class AccountsHttpClient : IAccountsHttpClient
    {
        private readonly HttpClient _httpClient;

        public AccountsHttpClient(HttpClient httpClient,
            FinastraConfiguration finastraConfiguration)
        {
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri($"{finastraConfiguration.ApiConfiguration.BaseUrl}/retail-us/me/account/v1/accounts/");
        }

		public async Task<List<AccountBalance>> GetAccountBalances()
		{
			var stream = await _httpClient.GetStreamAsync("");
			var data = await JsonSerializer.DeserializeAsync<List<AccountBalance>>(stream);
			return data;
		}

		public async Task<List<AccountInterestPaid>> GetAccountInterestPaids(string accountId)
		{
			var stream = await _httpClient.GetStreamAsync($"{accountId}/interestPaid");
			var data = await JsonSerializer.DeserializeAsync<List<AccountInterestPaid>>(stream);
			return data;
		}

		public async Task<List<AccountOverview>> GetAccountOverviews()
		{
			var stream = await _httpClient.GetStreamAsync("");
			var data = await JsonSerializer.DeserializeAsync<List<AccountOverview>>(stream);
			return data;
		}

		public async Task<List<AccountSummary>> GetAccountSummariesAsync()
        {
            var stream = await _httpClient.GetStreamAsync("");
            var data = await JsonSerializer.DeserializeAsync<List<AccountSummary>>(stream);
            return data;
        }

		public async Task<List<AccountTransactionCheckImage>> GetAccountTransactionCheckImages()
		{
			var stream = await _httpClient.GetStreamAsync("");
			var data = await JsonSerializer.DeserializeAsync<List<AccountTransactionCheckImage>>(stream);
			return data;
		}

		public async Task<List<AccountTransactionDetail>> GetAccountTransactionDetails()
		{
			var stream = await _httpClient.GetStreamAsync("");
			var data = await JsonSerializer.DeserializeAsync<List<AccountTransactionDetail>>(stream);
			return data;
		}

		public async Task<List<AccountTransaction>> GetAccountTransactions(string accountId)
		{
			var stream = await _httpClient.GetStreamAsync($"{accountId}/transaction");
			var data = await JsonSerializer.DeserializeAsync<List<AccountTransaction>>(stream);
			return data;
		}

		public async Task<List<AccountTransactionSaveImage>> GetAccountTransactionSaveImages(string accountId)
		{
			var stream = await _httpClient.GetStreamAsync($"{accountId}/transaction");
			var data = await JsonSerializer.DeserializeAsync<List<AccountTransactionSaveImage>>(stream);
			return data;
		}

		public async Task<List<Address>> GetAddresses(string accountId)
		{
			var stream = await _httpClient.GetStreamAsync($"{accountId}/account");
			var data = await JsonSerializer.DeserializeAsync<List<Address>>(stream);
			return data;
		}

		public async Task<List<AllAccountsOverview>> GetAllAccountsOverviews()
		{
			var stream = await _httpClient.GetStreamAsync("");
			var data = await JsonSerializer.DeserializeAsync<List<AllAccountsOverview>>(stream);
			return data;
		}

		public async Task<List<AccountDetail>> GetDetailsAsync(string accountId)
        {
            var stream = await _httpClient.GetStreamAsync($"{accountId}/details");
            var data = await JsonSerializer.DeserializeAsync<List<AccountDetail>>(stream);
            return data;
        }

		public async Task<List<DonnationsBanner>> GetDonnationsBanners(string accountId)
		{
			var stream = await _httpClient.GetStreamAsync($"{accountId}/donations");
			var data = await JsonSerializer.DeserializeAsync<List<DonnationsBanner>>(stream);
			return data;
		}

		public async Task<List<ExtendedDetailedAccount>> GetExtendedDetailedAccounts(string accountId)
		{
			var stream = await _httpClient.GetStreamAsync($"{accountId}/extendedaccount");
			var data = await JsonSerializer.DeserializeAsync<List<ExtendedDetailedAccount>>(stream);
			return data;
		}

		public async Task<List<OwnerAddess>> GetOwnerAddesses()
		{
			var stream = await _httpClient.GetStreamAsync("");
			var data = await JsonSerializer.DeserializeAsync<List<OwnerAddess>>(stream);
			return data;
		}
	}
}
