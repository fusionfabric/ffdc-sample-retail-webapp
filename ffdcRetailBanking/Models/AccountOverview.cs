using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AccountOverview
	{
		[JsonPropertyName("nickname")]
		public string Nickname { get; set; }

		[JsonPropertyName("currentBalance")]
		public int CurrentBalance { get; set; }

		[JsonPropertyName("availableBalance")]
		public int AvailableBalance { get; set; }

		[JsonPropertyName("accountNumber")]
		public string AccountNumber { get; set; }
	}
}
