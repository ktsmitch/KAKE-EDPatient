import { Component, OnInit } from '@angular/core';
import {Clinical} from '../app/clinical';
import { ActivatedRoute } from '@angular/router';
import {ClinicService} from '../clinic.service'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-individual-clinical',
  templateUrl: './individual-clinical.component.html',
  styleUrls: ['./individual-clinical.component.css']
})
export class IndividualClinicalComponent implements OnInit {
  clinical: Clinical; 
  treatment: string[]; 
  whatCauses: string[];
  symptons: string[];
  homeCare: string[];
  seekingHelp: string[];
  returnImmed: string[]; 
  prevention: string[];
  whatToExpect: string[];
  whatIs: string[]; 
  wantToKnowMore: string[];
  followUp: string[];

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private clinicService: ClinicService) {
   }

  ngOnInit(): void {
    this.getClinic();
  }

  getClinic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clinicService.getClinic(id).subscribe(res=> {
      this.clinical = res;
      this.editTreatmentString(res); 
      this.editWhatCausesString(res); 
      this.editHomeCareString(res);
      this.editReturnImmedString(res);
      this.editSymptonString(res); 
      this.editSeekHelpString(res);
      this.editWhatExpectString(res);
      this.editPreventionString(res);
      this.editWhatIsString(res);
      this.editWantToKnowMoreString(res);
      this.editFollowUpString(res);
    });
   
  }

  goBack(): void {
    this.location.back();
  }
  editWhatIsString(clin: Clinical) {
    if(Clinical) {
      if(clin.whatIs != '') {
        this.whatIs = clin.whatIs.split("");
      }
    }
  }

  editTreatmentString(clin: Clinical) {
    if(Clinical) {
      if(clin.treatment != '') {
        this.treatment = clin.treatment.split("");
      }
    }
  }
  editFollowUpString(clin: Clinical) {
    if(Clinical) {
      if(clin.followUp != '') {
        this.followUp = clin.followUp.split("");
      }
    }
  }

  editWhatCausesString(clin: Clinical) {
    if(Clinical) {
      if(clin.whatCauses != '') {
        this.whatCauses = clin.whatCauses.split("");
      }
    }
  }

  editSymptonString(clin: Clinical) {
    if(Clinical) {
      if(clin.symptons != '') {
        this.symptons = clin.symptons.split("");
      }
    }
  }

  editHomeCareString(clin: Clinical) {
    if(Clinical) {
      if(clin.homeCare != '') {
        this.homeCare = clin.homeCare.split("");
      }
    }
  }

  editSeekHelpString(clin: Clinical) {
    if(Clinical) {
      if(clin.seekingHelp != '') {
        this.seekingHelp = clin.seekingHelp.split("");
      }
    }
  }

    editReturnImmedString(clin: Clinical) {
      if(Clinical) {
        if(clin.returnImmedIf != '') {
          this.returnImmed = clin.returnImmedIf.split("");
        }
      }
    }

    editPreventionString(clin: Clinical) {
      if(Clinical) {
        if(clin.prevention != '') {
          this.prevention = clin.prevention.split("");
        }
      }
    }

    editWhatExpectString(clin: Clinical) {
      if(Clinical) {
        if(clin.whatToExpect != '') {
          this.whatToExpect = clin.whatToExpect.split("");
        }
      }
    }

    editWantToKnowMoreString(clin: Clinical) {
      if(Clinical) {
        if(clin.wantToKnowMore != '') {
          this.wantToKnowMore = clin.wantToKnowMore.split("");
        }
      }
    }
}
