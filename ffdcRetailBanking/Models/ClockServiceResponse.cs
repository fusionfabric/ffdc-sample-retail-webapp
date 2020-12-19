using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
    public class ClockServiceResponse
    {
        [JsonPropertyName("currentTime")]
        public DateTime CurrentTime { get; set; }
    }
}
