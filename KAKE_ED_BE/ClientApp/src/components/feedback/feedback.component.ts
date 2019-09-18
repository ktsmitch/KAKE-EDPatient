import { Component, OnInit } from '@angular/core';

declare const sendDataToServer: any; 
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onClick(){
    sendDataToServer();
  }

}
