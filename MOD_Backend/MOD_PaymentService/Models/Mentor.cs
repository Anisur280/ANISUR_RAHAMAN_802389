using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_PaymentService.Models
{
    public class Mentor
    {
        [Key]
        public string MentorId { get; set; }
        [Required]
        public string MentorName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string MobileNo { get; set; }
        [Required]
        public string Experience { get; set; }
        [Required]
        public string PrimarySkills { get; set; }
        [Required]
        public string TimeSlot { get; set; }
        public bool Activity { get; set; }
        public IEnumerable<Training> Trainings { get; set; }
        public IEnumerable<Payment> Payments { get; set; }

    }
}
