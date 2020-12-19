using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class Notification
	{
		public string Organization { get; set; }
		public TimeSpan FirstDonaton { get; set; }
		public TimeSpan NextDonaton { get; set; }

		public decimal DonationAmount { get; set; }
		public double Currency { get; set; }

	}
}
