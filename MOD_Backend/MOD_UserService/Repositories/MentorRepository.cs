using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MOD_UserService.Context;
using MOD_UserService.Models;

namespace MOD_UserService.Repositories
{
    public class MentorRepository : IMentorRepository
    {   
        private readonly UserContext _context;
        public MentorRepository(UserContext context)
        {
            _context = context;
        }
        public void Add(Mentor item)
        {
            _context.Mentors.Add(item);
            _context.SaveChanges();
        }

        public void Delete(string id)
        {
            var item = _context.Mentors.Find(id);
            _context.Mentors.Remove(item);
            _context.SaveChanges();
        }

        public IList<Mentor> GetAll()
        {
            return _context.Mentors.ToList();
        }

        public void Update(Mentor item)
        {
            _context.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
        }
        public void ResetPassword(string Email, string NewPass)
        {
            var obj = _context.Users.SingleOrDefault(i => i.Email == Email);
            obj.Password = NewPass;
            _context.SaveChanges();
        }
    }
}
