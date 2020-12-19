using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AccountTransactionCheckImage
	{
		[JsonPropertyName("front")]
		public string Front { get; set; }

		[JsonPropertyName("back")]
		public string Back { get; set; }
	}
}
