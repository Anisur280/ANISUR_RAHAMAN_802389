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
    public class MentorController : ControllerBase
    {

        private readonly IMentorRepository _repository;
        public MentorController(IMentorRepository repository)
        {
            _repository = repository;
        }
        // GET: api/Mentor
        [HttpGet]
        [Route("GetAll")]
        public IList<Mentor> Get()
        {
            return _repository.GetAll();
        }

       
        // POST: api/Mentor
        [HttpPost]
        [Route("Add")]
        public IActionResult Post([FromBody] Mentor item)
        {
            _repository.Add(item);
            return Ok("Mentor's Record Added..");
        }

        // PUT: api/Mentor/5
        [HttpPut("{id}")]
        [Route("Update/{id}")]
        public void Put(Mentor item)
        {
            _repository.Update(item);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Route("Delete/{id}")]
        public void Delete(string id)
        {
            _repository.Delete(id);
        }

        // PUT: api/Mentor/ResetPassword/5
        [HttpPut("{id}")]
        [Route("ResetPassword/{Email}/{NewPass}")]
        public void ResetPassword(string Email, string NewPass)
        {
            _repository.ResetPassword(Email, NewPass);

        }
    }
}
