﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MOD_PaymentService.Context;
using MOD_PaymentService.Models;

namespace MOD_PaymentService.Repositories
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly PaymentContext _context;
        public PaymentRepository(PaymentContext context)
        {
            _context = context;
        }
        public void Add(Payment item)
        {
            try
            {

                _context.Payments.Add(item);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

        }

        public IList<Payment> GetAll()
        {
            try
            {
                return _context.Payments.ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}