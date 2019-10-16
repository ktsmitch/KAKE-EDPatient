import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare const sendDataToServer: any;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private location: Location) 
  {}

  ngOnInit() {

  }

  onClick(){
    sendDataToServer();
  }


}
