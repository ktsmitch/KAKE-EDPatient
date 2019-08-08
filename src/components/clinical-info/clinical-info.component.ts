import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinical-info',
  templateUrl: './clinical-info.component.html',
  styleUrls: ['./clinical-info.component.css']
})
export class ClinicalInfoComponent implements OnInit {
  
  alphabet: string [] = [
    'A','B','C','D','E', 'F', 'G'
, 'H', 'I', 'J', 'K'
  ];

  selectedCondition: string; 

  constructor() { }

  ngOnInit() {
  }

  onSelect(alpha: string): void {
    let me = this;
    me.selectedCondition = alpha; 
  }
}
