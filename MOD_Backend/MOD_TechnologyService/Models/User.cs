using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_TechnologyService.Models
{
    public class User
    {
        [Key]
        public string UserId { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string MobileNo { get; set; }
        public bool Active { get; set; }
        public IEnumerable<Training>Trainings { get; set; }
        public IEnumerable<Payment> Payments { get; set; }
    }
}
