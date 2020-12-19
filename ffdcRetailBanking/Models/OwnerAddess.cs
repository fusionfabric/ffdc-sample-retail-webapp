using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class OwnerAddess
	{
		[JsonPropertyName("streetLine_1")]
		public string StreetLine_1 { get; set; }

		[JsonPropertyName("streetLine_2")]
		public string StreetLine_2 { get; set; }

		[JsonPropertyName("streetLine_3")]
		public string StreetLine_3 { get; set; }

		[JsonPropertyName("city")]
		public string City { get; set; }

		[JsonPropertyName("state")]
		public string State { get; set; }

		[JsonPropertyName("country")]
		public string Country { get; set; }

		[JsonPropertyName("province")]
		public string Province { get; set; }

		[JsonPropertyName("postalCode")]
		public string PostalCode { get; set; }

		[JsonPropertyName("postalCodeExtension")]
		public string PostalCodeExtension { get; set; }

		[JsonPropertyName("addressType")]
		public string AddressType { get; set; }
	}
}
