using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD_UserService.Models;
using MOD_UserService.Repositories;

namespace MOD_UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repository;
        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }
        // GET: api/User
        [HttpGet]
        [Route("GetAll")]
        public List<User> Get()
        {
            return _repository.GetAll();
        }

        // GET: api/User/5
        [HttpGet]
        [Route("SearchMentor/{PrimarySkills}/{TimeSlot}")]
        public List <Mentor> GetMentor(string PrimarySkills, string TimeSlot)
        {
            return _repository.SearchMentor(PrimarySkills,TimeSlot);
        }

        // POST: api/User
        [HttpPost]
        [Route("Add")]
        public IActionResult Post([FromBody] User item)
        {
            _repository.Add(item);
            return Ok("User's Record Added..");
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        [Route("Update/{id}")]
        public void Put(User item)
        {
            _repository.Update(item);
        }

        //block

        [HttpPut("{id}")]
        [Route("BlockUser/{id}")]
        public string put(string id)
        {
            _repository.BlockUser(id);
            return "Blocked";
        }

        // PUT: api/User/ResetPassword/5
        [HttpPut("{id}")]
        [Route("ResetPassword/{Email}/{NewPass}")]
        public void ResetPassword(string Email, string NewPass)
        {
            _repository.ResetPassword(Email, NewPass);

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Route("Delete/{id}")]
        public void Delete(string id)
        {
            _repository.Delete(id);
        }
    }
}