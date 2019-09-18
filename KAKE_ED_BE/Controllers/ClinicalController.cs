using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KAKE_ED_BE.Models;
using System.Data.SqlClient;
using System.Web.Http.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KAKE_ED_BE.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ClinicalController : Controller
    {

        ClinicalDataAccessLayer objclinical = new ClinicalDataAccessLayer(); 

        // GET: api/<controller>
        [HttpGet]
        [Route("api/clinical/getAll")]
        public IEnumerable<Clinical> GetClinicals()
        {
            return objclinical.GetAllClinicalInfo();
        }

        [HttpGet]
        [Route("api/clinical/getClinic/{id}")]
        public Clinical GetClinicalData(int id)
        {
            return objclinical.GetClinicalData(id);
        }

        [HttpGet]
        [Route("api/clinical/search/{name}")]
        public IEnumerable<Clinical> SearchClinicalData(string name)
        {
            return objclinical.SearchClinicalData(name);
        }
    }
}
