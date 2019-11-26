using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_AuthenticationService.Models
{
    public class Payment
    {
        [Key]

        public string PaymentId { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        [ForeignKey("Mentor")]
        public string MentorId { get; set; }
        [ForeignKey("Training")]
        public string TrainingId { get; set; }
        public string Ammount { get; set; }
        public string MentorAmmount { get; set; }
        public User User { get; set; }
        public Mentor Mentor { get; set; }
        public Training Training { get; set; }


    }
}
