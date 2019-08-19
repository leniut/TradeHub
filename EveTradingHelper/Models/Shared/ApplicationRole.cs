using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EveTradingHelper.Models.Shared
{
    public class ApplicationRole : IdentityRole<string>
    {
        [MaxLength(1500)]
        public virtual string RoleDescription { get; set; }
    }
}
