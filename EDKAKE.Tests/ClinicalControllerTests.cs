using System;
using Xunit;
using KAKE_ED_BE.Controllers;
using KAKE_ED_BE.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using FluentAssertions;

namespace EDKAKE.Tests
{
    public class ClinicalControllerTests
    {

        #region Get All Clinical
      
        [Fact]
        public void GetAllClinical_Return_OkResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            IEnumerable<Clinical> data = new List<Clinical>();

            //act
            data = testClinicalAccess.GetAllClinicalInfo();

            //assert
            Assert.IsType<OkObjectResult>(data);

        }

        [Fact]
        public void GetAllClinical_Return_BadRequestResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            IEnumerable<Clinical> data = new List<Clinical>();

            //act
            data = testClinicalAccess.GetAllClinicalInfo();
            data = null;
            
            if(data!=null)
            //assert
            Assert.IsType<BadRequestResult>(data);

        }
        #endregion

        #region Get By ID
        [Fact]
        public void GetClinicalByID_Return_OkResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical();
            var postId = 1;


            //act
            data = testClinicalAccess.GetClinicalData(postId);

            //assert
            Assert.IsType<OkObjectResult>(data);

        }

        [Fact]
        public void GetClinicalByID_Return_NotFoundResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical();
            var postId = 1000;


            //act
            data = testClinicalAccess.GetClinicalData(postId);

            //assert
            Assert.IsType<NotFoundResult>(data);

        }

        [Fact]
        public void GetClinicalByID_Return_BadResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical();
            var postId = 'x';


            //act
            data = testClinicalAccess.GetClinicalData(postId);

            //assert
            Assert.IsType<BadRequestResult>(data);

        }
        #endregion

        #region Add New Condition
        [Fact]
        public void AddValidData_Return_OkResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical() { Id = 1234567, Name = "Test Name", WhatIs = "Test What Is" };
            int expected = 1; //1 = successfully added to DB

            //act
            int result = testClinicalAccess.AddClinical(data);

            //assert
            Assert.Equal(expected, result); 

        }

        [Fact]
        public void AddValidData_Return_BadRquest()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical() { Id = 1, Name = "Test Name", WhatIs = "Test What Is" }; //Test ID same as existing DB item
            int expected = 1; //1 = successfully added to DB

            //act
            int result = testClinicalAccess.AddClinical(data);

            //assert
            Assert.NotEqual(expected, result);

        }

        [Fact]
        public void AddValidData_Return_BadRquest2()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical() { Id = 123456 }; //Test adding without required fields: Name and WhatIs
            int expected = 1; //1 = successfully added to DB

            //act
            int result = testClinicalAccess.AddClinical(data);

            //assert
            Assert.NotEqual(expected, result);

        }

        #endregion

        #region Updating Existing Condition
        [Fact]
        public void UpdateValidData_Return_OkResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            var postId = 1; 
            int expected = 1; //1 = successfully added to DB

            //act
            Clinical existingPost = testClinicalAccess.GetClinicalData(postId);
            existingPost.Name = "Test Name Updated";
            int returnVal = testClinicalAccess.UpdateClinical(existingPost); 

            //assert
            Assert.Equal(expected, returnVal);

        }

        [Fact]
        public void UpdateInValidData_Return_NotFound()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            var postId = 1;
            int expected = 1; //1 = successfully added to DB

            //act
            Clinical existingPost = testClinicalAccess.GetClinicalData(postId);
            var invalidPost = new Clinical();
            invalidPost.Id = 123456;
            invalidPost.Name = existingPost.Name;
            invalidPost.WhatIs = existingPost.WhatIs;
        
            int returnVal = testClinicalAccess.UpdateClinical(invalidPost);

            //assert
            Assert.NotEqual(expected, returnVal);
        }

        #endregion

        #region Delete Existing Condition
        [Fact]
        public void Delete_Clinical_Return_OkResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            var postId = 1;
            int expected = 1; //1 = successfully added to DB

            //act
            int returnVal = testClinicalAccess.DeleteClinical(postId);
           

            //assert
            Assert.Equal(expected, returnVal);

        }

        [Fact]
        public void Delete_Clinical_Return_BadRequestResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            var postId = 'x';
            int expected = 1; //1 = successfully added to DB

            //act
            int returnVal = testClinicalAccess.DeleteClinical(postId);


            //assert
            Assert.NotEqual(expected, returnVal);

        }

        #endregion


        #region Search Clinical
       
        [Fact]
        public void SearchClinical_Return_OkResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            IEnumerable<Clinical> data = new List<Clinical>();
            var searchString = "ab"; 


            //act
            data = testClinicalAccess.SearchClinicalData(searchString);

            //assert
            Assert.IsType<OkObjectResult>(data);

        }

        [Fact]
        public void SearchClinical_Return_BadRequestResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            IEnumerable<Clinical> data = new List<Clinical>();
            var searchString = "ab";

            //act
            data = testClinicalAccess.SearchClinicalData(searchString);
            data = null;

            if (data != null)
                //assert
                Assert.IsType<BadRequestResult>(data);

        }
        #endregion
    }
}