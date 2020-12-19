using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AccountBalance 
	{
		[JsonPropertyName("type")]
		public string Type { get; set; }

		[JsonPropertyName("number")]
		public int Number { get; set; }
	}
}
