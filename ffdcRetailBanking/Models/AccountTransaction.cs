using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AccountTransaction
	{
		[JsonPropertyName("Id")]
		public string Id { get; set; }

		[JsonPropertyName("accountId")]
		public string AccountId { get; set; }

		[JsonPropertyName("transactionDate")]
		public string TransactionDate { get; set; }

		[JsonPropertyName("transactionAmount")]
		public decimal TransactionAmount { get; set; }

		[JsonPropertyName("runningBalance")]
		public decimal RunningBalance { get; set; }

		[JsonPropertyName("pending")]
		public bool Pending { get; set; }

		[JsonPropertyName("debit")]
		public bool Debit { get; set; }

		[JsonPropertyName("checkImage")]
		public string CheckImage { get; set; }

		[JsonPropertyName("checkNumber")]
		public string CheckNumber { get; set; }

		[JsonPropertyName("description2")]
		public string Description2 { get; set; }

		[JsonPropertyName("transactionCategory")]
		public string TransactionCategory { get; set; }

		[JsonPropertyName("markAttended")]
		public bool MarkAttended { get; set; }

		[JsonPropertyName("organisation")]
		public string Organisation { get; set; }
	}
}
