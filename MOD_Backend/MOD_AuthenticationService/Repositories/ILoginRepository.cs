using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_AuthenticationService.Repositories
{
    public interface ILoginRepository
    {
        bool UserLogin(string uid, string pwd);
        bool MentorLogin(string mid, string pwd);
        

    }
}
