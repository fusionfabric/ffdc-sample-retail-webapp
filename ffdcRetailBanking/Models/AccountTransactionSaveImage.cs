using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class AccountTransactionSaveImage
	{

		[JsonPropertyName("imageName")]
		public string ImageName { get; set; }

		[JsonPropertyName("imageData")]
		public string ImageData { get; set; }
	}
}
