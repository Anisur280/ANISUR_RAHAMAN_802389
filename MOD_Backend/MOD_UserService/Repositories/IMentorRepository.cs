using MOD_UserService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_UserService.Repositories
{
    public interface IMentorRepository
    {
        IList<Mentor> GetAll();
        void Add(Mentor item);
        void Update(Mentor item);
        void Delete(string id);
        void ResetPassword(string Email, string NewPass);
    }
}
