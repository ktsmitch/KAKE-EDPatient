import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicService } from '../clinic.service';
import {Search} from '../app/search';
import {SEARCHDATA} from '../app/search-data';

@Component({
  selector: 'app-search-website',
  templateUrl: './search-website.component.html',
  styleUrls: ['./search-website.component.css']
})
export class SearchWebsiteComponent implements OnInit {
  searchTerm: string; 
  data: Search[] = []; 
  

  constructor(private _avRoute: ActivatedRoute,
    private _clinicService: ClinicService, private _router: Router) { 
      if (this._avRoute.snapshot.params['term']) {
        this.searchTerm = this._avRoute.snapshot.params['term'];
      }
    }

    search(data: Search) {
      this._router.navigate(['/' + data.routerLink ]);
    }
  

  ngOnInit() {
    SEARCHDATA.forEach(element => { 
      if(element.name == this.searchTerm) {
        this.data.push(element);
      } 
    }) 
  }

}
