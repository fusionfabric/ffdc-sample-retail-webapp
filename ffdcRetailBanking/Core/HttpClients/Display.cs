using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Core.HttpClients
{
	public class Display : IDisplay
	{
		public string Print(string username)
		{
			 var response = ($"Recurring Donation Scheduled. Notification will appear Monthly");
			return response;
		}
	}
}
