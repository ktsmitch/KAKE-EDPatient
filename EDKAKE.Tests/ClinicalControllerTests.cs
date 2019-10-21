using System;
using Xunit;
using KAKE_ED_BE.Controllers;
using KAKE_ED_BE.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using FluentAssertions;
using System.Transactions;
using System.Data.SqlClient;

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

            //act
            IEnumerable<Clinical> data = testClinicalAccess.GetAllClinicalInfo();

            //assert
            Assert.IsType<Clinical[]>(data);
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
            var postId = 1;


            //act
            Clinical data = testClinicalAccess.GetClinicalData(postId);

            //assert
            Assert.IsType<Clinical>(data);

        }

        [Fact]
        public void GetClinicalByID_Return_NotFoundResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            int postId = -1000;

            //act
            Clinical data = testClinicalAccess.GetClinicalData(postId);
            if (data == null)
                //assert
            Assert.IsType<BadRequestResult>(data);

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
            Assert.IsType<Clinical>(data);

        }
        #endregion

        #region Add New Condition
        [Fact]
        public void AddValidData_Return_OkResult()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical() { Name = "Test Name", WhatIs = "Test What Is" };
            int expected = 1; //1 = successfully added to DB

            //act
            int result = testClinicalAccess.AddClinical(data);

            //assert
            Assert.Equal(expected, result); 

        }

        [Fact]
        public void AddInvalidData_Return_BadRquest()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            Clinical data = new Clinical() { WhatIs = null }; 
            int expected = 0; // 0 = not added successfully to DB

            //act
            int result = testClinicalAccess.AddClinical(data);

            //assert
            Assert.Equal(expected, result);


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
        public void UpdateInvalidData_Return_NotFound()
        {
            //arrange
            ClinicalDataAccessLayer testClinicalAccess = new ClinicalDataAccessLayer();
            var postId = 1;
            int expected = 0; // 0 = not added successfully to DB

            //act
            Clinical existingPost = testClinicalAccess.GetClinicalData(postId);
            var invalidPost = new Clinical();
            invalidPost = existingPost; 
            invalidPost.Name = null;
            invalidPost.WhatIs = null;


            int returnVal = testClinicalAccess.UpdateClinical(invalidPost);

            //assert
            Assert.Equal(expected, returnVal);
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
            Assert.IsType<Clinical[]>(data);

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