using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace KAKE_ED_BE.Models
{
    public class ClinicalDataAccessLayer
    {
        string connectionString = @"Data Source=DESKTOP-I19NO7E\SQLEXPRESS;Initial Catalog=master;Integrated Security=True"; // add string

        //To view all clinical info details    
        public IEnumerable<Clinical> GetAllClinicalInfo()
        {
            try
            {
                List<Clinical> lstclinical = new List<Clinical>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM dbo.Clinicalnfo ORDER BY Name"; 
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        Clinical clinical = new Clinical();
                        clinical.Id = Convert.ToInt32(rdr["Id"]);
                        clinical.Name = rdr["Name"].ToString();
                        clinical.WhatIs = rdr["WhatIs"].ToString();
                        clinical.WhatCauses = rdr["WhatCauses"].ToString();
                        clinical.Symptons = rdr["Symptons"].ToString();
                        clinical.Treatment = rdr["Treatment"].ToString();
                        clinical.HomeCare = rdr["HomeCare"].ToString();
                        clinical.WhatToExpect = rdr["WhatToExpect"].ToString();
                        clinical.SeekingHelp = rdr["SeekingHelp"].ToString();
                        clinical.WantToKnowMore = rdr["WantToKnowMore"].ToString();
                        clinical.WaysToReduce = rdr["WaysToReduce"].ToString();
                        clinical.FollowUp = rdr["FollowUp"].ToString();
                        clinical.Prevention = rdr["Prevention"].ToString();
                        clinical.WhyDoesThisHappen = rdr["WhyDoesThisHappen"].ToString();
                        clinical.ReturnImmedIf = rdr["ReturnImmedIf"].ToString();
                        clinical.Instructions = rdr["Instructions"].ToString();
                        clinical.WhyIsItAProb = rdr["WhyIsItAProb"].ToString();
                        clinical.WhatShouldIDo = rdr["WhatShouldIDo"].ToString();
                        clinical.HowIsItSpread = rdr["HowIsItSpread"].ToString();
                        clinical.StoppingSpread = rdr["StoppingSpread"].ToString();
                        clinical.ProbsToWatchFor = rdr["ProbsToWatchFor"].ToString();

                        lstclinical.Add(clinical);
                    }
                    con.Close();
                }
                Clinical[] clinArr = lstclinical.ToArray(); 
                return clinArr;
            }
            catch
            {
                throw;
            }
        } // end GetAllClinicalInfo class

        //Get the details of a particular employee
        public Clinical GetClinicalData(int id)
        {
            try
            {
                Clinical clinical = new Clinical();

                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM dbo.Clinicalnfo WHERE id=" + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        clinical.Id = Convert.ToInt32(rdr["Id"]);
                        clinical.Name = rdr["Name"].ToString();
                        clinical.WhatIs = rdr["WhatIs"].ToString();
                        clinical.WhatCauses = rdr["WhatCauses"].ToString();
                        clinical.Symptons = rdr["Symptons"].ToString();
                        clinical.Treatment = rdr["Treatment"].ToString();
                        clinical.HomeCare = rdr["HomeCare"].ToString();
                        clinical.WhatToExpect = rdr["WhatToExpect"].ToString();
                        clinical.SeekingHelp = rdr["SeekingHelp"].ToString();
                        clinical.WantToKnowMore = rdr["WantToKnowMore"].ToString();
                        clinical.WaysToReduce = rdr["WaysToReduce"].ToString();
                        clinical.FollowUp = rdr["FollowUp"].ToString();
                        clinical.Prevention = rdr["Prevention"].ToString();
                        clinical.WhyDoesThisHappen = rdr["WhyDoesThisHappen"].ToString();
                        clinical.ReturnImmedIf = rdr["ReturnImmedIf"].ToString();
                        clinical.Instructions = rdr["Instructions"].ToString();
                        clinical.WhyIsItAProb = rdr["WhyIsItAProb"].ToString();
                        clinical.WhatShouldIDo = rdr["WhatShouldIDo"].ToString();
                        clinical.HowIsItSpread = rdr["HowIsItSpread"].ToString();
                        clinical.StoppingSpread = rdr["StoppingSpread"].ToString(); 
                        clinical.ProbsToWatchFor = rdr["ProbsToWatchFor"].ToString();

                    }
                }

                return clinical;
            }
            catch
            {
                throw;
            }
        } // end GetClinicalData class

        //search for the details of a particular clinical problem
        public IEnumerable<Clinical> SearchClinicalData(string name)
        {
            try
            {
                List<Clinical> lstclinical = new List<Clinical>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM dbo.Clinicalnfo WHERE Name LIKE '%" +name+ "%'";
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        Clinical clinical = new Clinical();
                        clinical.Id = Convert.ToInt32(rdr["Id"]);
                        clinical.Name = rdr["Name"].ToString();
                        clinical.WhatIs = rdr["WhatIs"].ToString();
                        clinical.WhatCauses = rdr["WhatCauses"].ToString();
                        clinical.Symptons = rdr["Symptons"].ToString();
                        clinical.Treatment = rdr["Treatment"].ToString();
                        clinical.HomeCare = rdr["HomeCare"].ToString();
                        clinical.WhatToExpect = rdr["WhatToExpect"].ToString();
                        clinical.SeekingHelp = rdr["SeekingHelp"].ToString();
                        clinical.WantToKnowMore = rdr["WantToKnowMore"].ToString();
                        clinical.WaysToReduce = rdr["WaysToReduce"].ToString();
                        clinical.FollowUp = rdr["FollowUp"].ToString();
                        clinical.Prevention = rdr["Prevention"].ToString();
                        clinical.WhyDoesThisHappen = rdr["WhyDoesThisHappen"].ToString();
                        clinical.ReturnImmedIf = rdr["ReturnImmedIf"].ToString();
                        clinical.Instructions = rdr["Instructions"].ToString();
                        clinical.WhyIsItAProb = rdr["WhyIsItAProb"].ToString();
                        clinical.WhatShouldIDo = rdr["WhatShouldIDo"].ToString();
                        clinical.HowIsItSpread = rdr["HowIsItSpread"].ToString();
                        clinical.StoppingSpread = rdr["StoppingSpread"].ToString();
                        clinical.ProbsToWatchFor = rdr["ProbsToWatchFor"].ToString();

                        lstclinical.Add(clinical);
                    }
                    con.Close();
                }
                Clinical[] clinArr = lstclinical.ToArray();
                return clinArr;
            }
            catch
            {
                throw;
            }
        } // end GetClinicalData class

    }
}
