using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EveTradingHelper.Models.Shared
{
    public class ApplicationUser: IdentityUser<string>
    {
        [MaxLength(150)]
        public virtual string FirstName { get; set; }

        [MaxLength(150)]
        public virtual string LastName { get; set; }

        public virtual bool IsConfirmed { get; set; }


    }
}
