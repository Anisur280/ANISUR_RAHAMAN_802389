using MOD_TechnologyService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_TechnologyService.Repositories
{
    public interface ISkillRepository
    {
        IList<Skill> GetAll();
        void Add(Skill item);
        void Update(Skill item);
        void Delete(string id);
        Skill GetSkillById(string id);
        Skill GetName(string name);
    }
}
