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
    public class FfdcHttpClient : IFfdcHttpClient
    {
        private readonly HttpClient _httpClient;

        public FfdcHttpClient(HttpClient httpClient,
            FinastraConfiguration finastraConfiguration)
        {
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri(finastraConfiguration.ApiConfiguration.BaseUrl);
        }

		public async Task<ClockServiceResponse> GetUtcDateTimeAsync()
		{
			await using var responseStream = await _httpClient.GetStreamAsync("/sample/clock-service/v1/datetime");
			return await JsonSerializer.DeserializeAsync<ClockServiceResponse>(responseStream);
		}
	}
}
