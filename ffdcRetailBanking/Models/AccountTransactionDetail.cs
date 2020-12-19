using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AccountTransactionDetail
	{

		[JsonPropertyName("label")]
		public string Label { get; set; }

		[JsonPropertyName("value")]
		public string Value { get; set; }
	}
}
