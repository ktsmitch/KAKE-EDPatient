import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({

  selector: 'app-information',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InformationComponent implements OnInit {



  constructor(
    private location: Location) {    
   }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
