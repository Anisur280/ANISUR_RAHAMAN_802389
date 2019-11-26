using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MOD_AuthenticationService.Models;
using MOD_AuthenticationService.Repositories;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace MOD_AuthenticationService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginRepository _repository;

        public LoginController(ILoginRepository repository)
        {
            _repository = repository;
        }

        // GET: api/Login


        [HttpGet]
        [Route("Validate/{id}/{password}")]
        public Token Get(string id, string password)
        {
            try
            {
                if (_repository.UserLogin(id, password))
                {
                    return new Token() { message = "User", token = GetToken() };
                }
                else if (_repository.MentorLogin(id, password))
                {
                    return new Token() { message = "Mentor", token = GetToken() };

                }
                else if (id == "Admin" && password == "Admin")
                {
                    return new Token() { message = "Admin", token = GetToken() };

                }
                else
                {
                    return new Token() { message = "Invalid User", token = "" };

                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        public string GetToken()
        {
            try
            {
                var _config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json").Build();
                var issuer = _config["Jwt:Issuer"];
                var audience = _config["Jwt:Audience"];
                var expiry = DateTime.Now.AddMinutes(120);
                var securityKey = new SymmetricSecurityKey
            (Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                var credentials = new SigningCredentials
            (securityKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(issuer: issuer,
            audience: audience,
            expires: DateTime.Now.AddMinutes(120),
            signingCredentials: credentials);

                var tokenHandler = new JwtSecurityTokenHandler();
                var stringToken = tokenHandler.WriteToken(token);
                return stringToken;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}

