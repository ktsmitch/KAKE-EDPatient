using Microsoft.VisualStudio.TestTools.UnitTesting;
using KAKE_ED_BE.Controllers;
using KAKE_ED_BE.Models;
using System.Collections.Generic;
using System.Data.SqlClient;
using System;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace ED.Tests
{
    [Fact]
    public class ClinicalControllerTest
    {
        string connectionString = @"Data Source=DESKTOP-I19NO7E\SQLEXPRESS;Initial Catalog=master;Integrated Security=True";

        [TestMethod]
        public void TestGetClinicals()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            IEnumerable<Clinical> lstclinical = new List<Clinical>();
           
            //act
            lstclinical = testClinicalAccess.GetAllClinicalInfo();

            //assert
            Assert.IsType<OkObjectResult>(lstclinical);
            Assert.

        }
    }
}
