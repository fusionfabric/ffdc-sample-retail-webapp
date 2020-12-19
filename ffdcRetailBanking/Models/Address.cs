using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class Address
	{
		[JsonPropertyName("addresses")]
		public string Addresses { get; set; }

		[JsonPropertyName("EmailType")]
		public string EmailType { get; set; }
	}
}
