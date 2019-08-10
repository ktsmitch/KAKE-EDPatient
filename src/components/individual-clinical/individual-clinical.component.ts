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
    this.clinicService.getClinic(id).subscribe(clinic=> this.clinical = clinic);
  }

  goBack(): void {
    this.location.back();
  }
}
