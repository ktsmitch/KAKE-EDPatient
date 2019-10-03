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

        public int AddClinical(Clinical clinical)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    Random random = new Random();
                    int num = random.Next();
                    string sqlQuery = "INSERT into dbo.Clinicalnfo (Id,Name,WhatIs,WhatCauses,Symptons,Treatment,HomeCare,WhatToExpect,SeekingHelp,WantToKnowMore,WaysToReduce,FollowUp,Prevention,WhyDoesThisHappen,ReturnImmedIf,Instructions,WhyIsItAProb,WhatShouldIDo,HowIsItSpread,StoppingSpread, ProbsToWatchFor) VALUES ('" + num + "' , '" 
                        + clinical.Name + "' , '" + clinical.WhatIs + "' , '" + clinical.WhatCauses + "' , '" + clinical.Symptons + "' , '" + clinical.Treatment + "' , '" + clinical.HomeCare + "' , '" + clinical.WhatToExpect + "' , '" + clinical.SeekingHelp + "' , '" + clinical.WantToKnowMore + "' , '" + clinical.WaysToReduce + "' , '" + clinical.FollowUp + "' , '" + clinical.Prevention + "' , '" + clinical.WhyDoesThisHappen + "' , '" + clinical.ReturnImmedIf
                + "' , '" + clinical.Instructions + "' , '" + clinical.WhyIsItAProb + "' , '" + clinical.WhatShouldIDo + "' , '" + clinical.HowIsItSpread + "' , '" + clinical.StoppingSpread + "' , '" + clinical.ProbsToWatchFor + "')";
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close(); 
                }
                return 1;
            }
            catch
            {
                throw; 
            }
         }

        public int UpdateClinical(Clinical clinical)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    //add all columns
                    string sqlQuery = "Update dbo.Clinicalnfo Set Name= '" + clinical.Name + "' , WhatIs= '" + clinical.WhatIs + "' , WhatCauses='" + clinical.WhatCauses + "' , Symptons= '" + clinical.Symptons + "' , Treatment = '" + clinical.Treatment + "' , HomeCare = '" + clinical.HomeCare + "' , WhatToExpect = '" + clinical.WhatToExpect + "' , SeekingHelp = '" + clinical.SeekingHelp + "' , WantToKnowMore = '" + clinical.WantToKnowMore + "' , WaysToReduce = '" + clinical.WaysToReduce + "' , FollowUp = '" + clinical.FollowUp + "' , Prevention = '" + clinical.Prevention + "' , WhyDoesThisHappen = '" + clinical.WhyDoesThisHappen + "' , ReturnImmedIf = '" + clinical.ReturnImmedIf + "' , Instructions = '" + clinical.Instructions + "' , WhyIsItAProb = '" + clinical.WhyIsItAProb
+ "' , WhatShouldIDo = '" + clinical.WhatShouldIDo + "' , HowIsItSpread = '" + clinical.HowIsItSpread + "' , StoppingSpread = '" + clinical.StoppingSpread + "' , ProbsToWatchFor = '" + clinical.ProbsToWatchFor + "' where Id=" + clinical.Id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteClinical(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "DELETE FROM dbo.Clinicalnfo WHERE id=" + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

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
