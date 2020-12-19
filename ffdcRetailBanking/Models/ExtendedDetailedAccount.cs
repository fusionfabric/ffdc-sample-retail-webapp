using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ffdcRetailBanking.Models
{
	public class ExtendedDetailedAccount
	{
		public AccountDetail Detail { get; set; }
		public string StatementDeliveryOption { get; set; }
		public Address StatementDeliveryEmail { get; set; }
		public string OwnerName { get; set; }
		public string StatementDeliveryEnrollmentTime { get; set; }
		public OwnerAddess Owner { get; set; }


	}
}
