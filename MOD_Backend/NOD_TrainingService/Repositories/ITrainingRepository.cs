using MOD_TrainingService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_TrainingService.Repositories
{
    public interface ITrainingRepository
    {
        IList<Training> GetAll();
        void Add(Training item);
        void Update(Training item);
        void Delete(string id);
        List<Training> CurrentTraining(string MentorId);
        List<Training> CompletedTraining(string MentorId);

    }
}
