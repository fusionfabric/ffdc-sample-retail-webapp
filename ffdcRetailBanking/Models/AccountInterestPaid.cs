using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AccountInterestPaid
	{
		[JsonPropertyName("interestThisYear")]
		public string InterestThisYear { get; set; }

		[JsonPropertyName("interstLastYear")]
		public string InterstLastYear { get; set; }
	}
}
