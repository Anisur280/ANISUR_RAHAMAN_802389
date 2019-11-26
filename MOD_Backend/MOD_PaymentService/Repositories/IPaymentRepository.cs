using MOD_PaymentService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_PaymentService.Repositories
{
    public interface IPaymentRepository
    {
        IList<Payment> GetAll();
        void Add(Payment item);
        
    }
}
