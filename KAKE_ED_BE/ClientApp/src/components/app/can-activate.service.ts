import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
 

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor(private userService: UserService) {};
  
  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) { 
       return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}