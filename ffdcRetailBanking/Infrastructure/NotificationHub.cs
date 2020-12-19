using ffdcRetailBanking.Core.HttpClients;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Infrastructure
{
	public class NotificationHub : Hub
	{

		//IConnectionManager allows us to make Dependency Injection in order to store Connection’s ID and Client identifiers.
		private IConnectionManager _connection;
		public NotificationHub(IConnectionManager manager)
		{
			_connection = manager;
		}

		public override Task OnConnectedAsync()
		{
			return base.OnConnectedAsync();
		}

		public override Task OnDisconnectedAsync(Exception exception)
		{
			return base.OnDisconnectedAsync(exception);
		}
	}
}
