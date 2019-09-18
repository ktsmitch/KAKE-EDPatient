using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KAKE_ED_BE.Models
{
    public class Clinical
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string WhatIs { get; set; }
        public string WhatCauses { get; set; }
        public string Symptons { get; set; }
        public string Treatment { get; set; }
        public string HomeCare { get; set; }
        public string WhatToExpect { get; set; }
        public string SeekingHelp { get; set; }
        public string WantToKnowMore { get; set; }
        public string WaysToReduce { get; set; }
        public string FollowUp { get; set; }
        public string Prevention { get; set; }
        public string WhyDoesThisHappen { get; set; }
        public string ReturnImmedIf { get; set; }
        public string Instructions { get; set; }
        public string WhyIsItAProb { get; set; }
        public string WhatShouldIDo { get; set; }
        public string HowIsItSpread { get; set; }
        public string StoppingSpread { get; set; }
        public string ProbsToWatchFor { get; set; }
    }
}
