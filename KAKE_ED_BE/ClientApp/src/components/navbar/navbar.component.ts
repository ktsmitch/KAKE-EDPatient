import { Component, OnInit, NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';

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

  constructor() { }

  ngOnInit() {
  }

}

