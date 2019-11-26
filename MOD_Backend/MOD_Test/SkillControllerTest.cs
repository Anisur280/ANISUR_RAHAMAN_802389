using System;
using System.Collections.Generic;
using System.Text;
using MOD_TechnologyService.Repositories;
using MOD_TechnologyService.Controllers;
using MOD_TechnologyService.Models;
using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;

namespace MOD_Test
{
    public class SkillControllerTest
    {
        private readonly Mock<ISkillRepository> _repo;
        private readonly SkillController _controller;

        public SkillControllerTest()
        {
            _repo = new Mock<ISkillRepository>();
            _controller = new SkillController(_repo.Object);
        }
        [Fact]

        public void Get()
        {
            _repo.Setup(m => m.GetAll()).Returns(GetSkillData());
            var result = _controller.Get() as List<Skill>;
            Assert.Equal(3, result.Count);
        }
        private List<Skill> GetSkillData()
        {
            return new List<Skill>()
            {
                new Skill(){SkillId="S2345",SkillName="Java"},
            new Skill() { SkillId = "S2346", SkillName = "Mean" },
            new Skill() { SkillId = "S2347", SkillName = "C#" }

            };

        }
        [Fact]
        public void GetByID()
        {
            _repo.Setup(m => m.GetSkillById("Java")).Returns(GetSkillData()[0]);
            var result = _controller.Get("Java") as Skill;

            Assert.NotNull(result);
            Assert.Equal("Java", result.SkillName);
        }
        [Fact]
        public void Post()
        {
            var item = GetSkillData()[0];
            var result = _controller.Post(item) as OkResult;
            Assert.NotNull(result);
        }
        [Fact]
        public void Put()
        {
            var item = GetSkillData()[0];
            var result = _controller.Put(item) as OkResult;
            Assert.NotNull(result);
        }
        [Fact]
        public void Delete()
        {
            _repo.Setup(m => m.Delete(It.IsAny<string>()));
            var result = _controller.Delete("S2345") as OkResult;
            Assert.NotNull(result);
        }
        [Fact]
        public void Delete_Badrequest()
        {
            _repo.Setup(m => m.Delete(It.IsAny<string>()));
            var result = _controller.Delete(null) as OkResult;
            Assert.NotNull(result);
        }
    }
}