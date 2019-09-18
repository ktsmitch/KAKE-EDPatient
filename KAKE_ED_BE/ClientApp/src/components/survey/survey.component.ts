import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';

Survey.StylesManager.applyTheme("bootstrap");

@Component({
  selector: 'app-survey',
  template: `<div id='surveyElement' style="margin:0 auto;text-align:center;font-family: 'Catamaran', sans-serif; margin-bottom: 100px;"></div>`,
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var surveyJSON = {pages:[{name:"Feedback Survey",elements:[{type:"rating",name:"Q1",title:"Please rate your overall experience at the Royal Brisbane Women's Hospital Emergency Department (5 = best)"},{type:"rating",name:"Q2",title:"How were the staff?"},{type:"rating",name:"Q3",title:"How were the facilities?"},{type:"text",name:"Q4",title:"What could we improve?"},{type:"text",name:"Q5",title:"Any other feedback?"}],title:"Feedback Survey"}]};
    var survey = new Survey.Model(surveyJSON);
    survey.onComplete.add(this.sendDataToServer);
    Survey.SurveyNG.render("surveyElement", {model:survey});
  }

   sendDataToServer(survey) {
    survey.sendResult('f3cabefc-3915-4816-9830-f835e0e0d1ac');
}
}
