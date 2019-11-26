using MOD_UserService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_UserService.Repositories
{
     public interface IUserRepository
    {
        List<User> GetAll();
        void Add(User item);
        void Update(User item);
        void Delete(string id);
        List<Mentor> SearchMentor(string PrimarySkills, string TimeSlot);
        void ResetPassword(string Email, string NewPass);
        void BlockUser(string id);

    }
}
