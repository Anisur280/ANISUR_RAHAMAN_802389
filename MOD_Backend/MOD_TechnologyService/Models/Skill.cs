using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_TechnologyService.Models
{
    public class Skill
    {
        [Key]
        public string SkillId { get; set; }
        [Required]
        public string SkillName { get; set; }
        public string TOC { get; set; }
        [Required]
        public double SkillFee { get; set; }
        [Required]
        public string Duration { get; set; }
        public IEnumerable<Training> Trainings { get; set; }


    }
}
