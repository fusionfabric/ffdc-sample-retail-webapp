using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AllAccountsOverview
	{
		[JsonPropertyName("available")]
		public int Available { get; set; }

		[JsonPropertyName("number")]
		public int Number { get; set; }
	}
}
