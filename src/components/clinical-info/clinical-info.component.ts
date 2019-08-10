import { Component, OnInit } from '@angular/core';
import {CLINICNFO} from '../app/mock-info';
import {Clinical} from '../app/clinical';

@Component({
  selector: 'app-clinical-info',
  templateUrl: './clinical-info.component.html',
  styleUrls: ['./clinical-info.component.css']
})
export class ClinicalInfoComponent implements OnInit {
  
  clinicinfo = CLINICNFO;

  selectedCondition: Clinical; 

  constructor() { }

  ngOnInit() {
  }

  onSelect(condition: Clinical): void {
    let me = this;
    me.selectedCondition = condition; 
  }

  
}
