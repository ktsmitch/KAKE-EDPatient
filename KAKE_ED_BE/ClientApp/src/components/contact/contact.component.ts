import { Component, ViewChild, OnInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapProperties = {
      center: new google.maps.LatLng(-27.446478, 153.028547),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }
 
}
