using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD_TechnologyService.Models;
using MOD_TechnologyService.Repositories;

namespace MOD_TechnologyService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        private readonly ISkillRepository _repository;
        public SkillController(ISkillRepository repository)
        {
            _repository = repository;
        }
        // GET: api/Skill
        [HttpGet]
        [Route("GetAll")]
        public IList<Skill> Get()
        {
            return _repository.GetAll();
        }

        // POST: api/Skill
        [HttpPost]
        [Route("Add")]
        public IActionResult Post(/*[FromBody]*/ Skill item)
        {
            _repository.Add(item);
            return Ok(/*"New Skill Added.."*/);
        }

        // PUT: api/Skill/5
        [HttpPut("{id}")]
        [Route("Update/{id}")]
        public IActionResult Put(Skill item)
        {
            _repository.Update(item);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Route("Delete/{id}")]
        public IActionResult Delete(string id)
        {
            _repository.Delete(id);
            return Ok();
        }
        //get by Id
        [HttpGet("{id}", Name = "Get")]
        [Route("GetSkillById/{id}")]
        public Skill Get(string id)
        {
            return _repository.GetSkillById(id);
        }

        [Route("GetName/{name}")]
        public Skill GetName(string name)
        {
            return _repository.GetName(name);
        }
    }
}
