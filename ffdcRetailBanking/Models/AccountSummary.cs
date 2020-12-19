using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
    public class AccountSummary
    {
        [JsonPropertyName("accountId")]
        public string AccountId { get; set; }

        [JsonPropertyName("accountType")]
        public string AccountType { get; set; }

        [JsonPropertyName("nickname")]
        public string Nickname { get; set; }

        [JsonPropertyName("formattedAccountNumber")]
        public string formattedAccountNumber { get; set; }

        [JsonPropertyName("donnationsBanner")]
        public DonnationsBanner Banner { get; set; }

        [JsonPropertyName("loadedExteded")]
        public bool LoadedExteded { get; set; }

        [JsonPropertyName("loadedDetail")]
        public bool LoadedDetail { get; set; }
    }
}
