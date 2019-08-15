import { Component, OnInit } from '@angular/core';
import {Clinical} from '../app/clinical';
import {ClinicService} from '../clinic.service'; 

@Component({
  selector: 'app-clinical-info',
  templateUrl: './clinical-info.component.html',
  styleUrls: ['./clinical-info.component.css']
})
export class ClinicalInfoComponent implements OnInit {
  
  clinicalInfo: Clinical[];

  selectedCondition: Clinical; 

  constructor(private clinicService: ClinicService ) { }

  ngOnInit() {
    this.getAllClinics(); 
  }

  getAllClinics(): void {
    this.clinicService.getAllClinic().subscribe(res => this.clinicalInfo = res);
  }

  onSelect(condition: Clinical): void {
    let me = this;
    me.selectedCondition = condition; 
  }

  
}
