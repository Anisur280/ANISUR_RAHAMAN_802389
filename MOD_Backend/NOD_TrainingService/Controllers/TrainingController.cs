using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD_TrainingService.Models;
using MOD_TrainingService.Repositories;

namespace MOD_TrainingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainingController : ControllerBase
    {
        private readonly ITrainingRepository _repository;
        public TrainingController(ITrainingRepository repository)
        {
            _repository = repository;
        }
        // GET: api/Training
        [HttpGet]
        [Route("GetAll")]
        public IList<Training> Get()
        {
            return _repository.GetAll();
        }

        [HttpGet]
        [Route("CompletedTraining/{MentorId}")]
        public List<Training> GetCompletedTraining(string MentorId)
        {
            return _repository.CompletedTraining(MentorId);
        }
        [HttpGet]
        [Route("CurrentTraining/{MentorId}")]
        public List<Training> GetCurrentTraining(string MentorId)
        {
            return _repository.CurrentTraining(MentorId);
        }


        // POST: api/Training
        [HttpPost]
        [Route("Add")]
        public IActionResult Post([FromBody] Training item)
        {
            _repository.Add(item);
            return Ok("New Training Details Added..");
        }

        // PUT: api/Training/5
        [HttpPut("{id}")]
        [Route("Update/{id}")]
        public void Put(Training item)
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
    }
}
