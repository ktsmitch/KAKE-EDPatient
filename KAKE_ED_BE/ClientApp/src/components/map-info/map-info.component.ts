import { Component, ViewChild, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {} from 'googlemaps';


@Component({

  selector: 'app-general-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})

export class MapInfoComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  constructor(
    private location: Location) {   
   }

  ngOnInit() {
  //   var mapProperties = {
  //     center: new google.maps.LatLng(-27.446478, 153.028547),
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  // };
  // this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
}

  goBack(): void {
    this.location.back();
  }

}
