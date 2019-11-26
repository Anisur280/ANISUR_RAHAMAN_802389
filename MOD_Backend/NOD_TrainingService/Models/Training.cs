using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_TrainingService.Models
{
    public class Training
    {
        [Key]
        public string TrainingId { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        [ForeignKey("Mentor")]
        public string MentorId { get; set; }
        [ForeignKey("Skill")]
        public string SkillId { get; set; }
        [Column(TypeName="Date")]
        public DateTime StartDate { get; set; }
        [Column(TypeName = "Date")]
        public DateTime EndDate { get; set; }
        [Required]
        public string TimeSlot { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public string Progress { get; set; }
        [Required]
        public float Rating { get; set; }
        public User User { get; set; }
        public Mentor Mentor { get; set; }
        public Skill Skill { get; set; }
        public IEnumerable<Payment> Payments { get; set; }
    }
}
