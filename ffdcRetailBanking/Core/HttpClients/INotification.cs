using ffdcRetailBanking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public interface INotification
	{
		Task RunNotificationAsync();
		Task<Notification> GetNotificationAsync(string path);
		Task<Uri> CreatNotificationAsync(Notification notification);
		
	}
}
