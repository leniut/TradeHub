using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EveTradingHelper.Models.Shared
{
    public class ApplicationUserRole : IdentityUserRole<string>
    {
        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [MaxLength(1500)]
        public virtual string Description { get; set; }
    }
}
