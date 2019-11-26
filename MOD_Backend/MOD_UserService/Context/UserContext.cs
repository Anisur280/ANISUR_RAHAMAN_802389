using Microsoft.EntityFrameworkCore;
using MOD_UserService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_UserService.Context
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }
       
        //DbSet
        public DbSet<User> Users { get; set; }
        public DbSet<Mentor> Mentors { get; set; }
        public DbSet<Skill> Skills{ get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Training> Trainings { get; set; }
    }
}
