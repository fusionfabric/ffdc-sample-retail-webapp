using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public class Notification : INotification
	{
		static HttpClient client = new HttpClient();
		public async Task<Uri> CreatNotificationAsync(Notification notification)
		{
			HttpResponseMessage response = await client.PostAsJsonAsync(
	   "api/notification", notification);
			response.EnsureSuccessStatusCode();

			// return URI of the created resource.
			return response.Headers.Location;
		}

		public async Task<Notification> GetNotificationAsync(string path)
		{
			Notification notification = null;
			HttpResponseMessage response = await client.GetAsync(path);
			if (response.IsSuccessStatusCode)
			{
				notification = await response.Content.ReadAsAsync<Notification>();
			}
			return notification;
		}

		public async Task RunNotificationAsync()
		{
			client.BaseAddress = new Uri("https://api.fusionfabric.cloud/login/v1/sandbox");
			client.DefaultRequestHeaders.Accept.Clear();
			client.DefaultRequestHeaders.Accept.Add(
			new MediaTypeWithQualityHeaderValue("application/json"));
		}
	}
}
