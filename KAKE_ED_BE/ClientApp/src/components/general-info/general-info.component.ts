import { Component, OnInit } from '@angular/core';


const left = document.querySelector('.left'); 
const right = document.querySelector('.right'); 
const container = document.querySelector('.container'); 

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
