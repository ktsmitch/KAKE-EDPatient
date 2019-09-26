import { Component, OnInit, NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {Observable, Subject} from 'rxjs';
import {SEARCHDATA} from '../app/search-data';
import {Search} from '../app/search';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

 @NgModule({
  imports: [MatListModule, MatButtonModule, MatMenuModule],
  exports: [MatListModule, MatButtonModule, MatMenuModule],
})

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _avRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

  }


  search(term: string) {
    this._router.navigate(['/search/' + term ]);

  }

}

