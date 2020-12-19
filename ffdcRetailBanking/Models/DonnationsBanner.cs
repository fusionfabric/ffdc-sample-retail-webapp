using System.Text.Json.Serialization;

namespace ffdcRetailBanking.Models
{
	public class DonnationsBanner
	{
		[JsonPropertyName("accountId")]
		public int Id { get; set; }

		[JsonPropertyName("donationAmount")]
		public int DonationAmount { get; set; }

		[JsonPropertyName("donationDestination")]
		public string DonationDestination { get; set; }

		[JsonPropertyName("donationTimestamp")]
		public int DonationTimestamp { get; set; }

		[JsonPropertyName("displayAt")]
		public int DisplayAt { get; set; }
	}
}