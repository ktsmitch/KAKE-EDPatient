import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  allowed: boolean = false; 
  constructor() { }

  isLoggedIn(): boolean {
    return this.allowed;
  }

  logIn() {
    this.allowed = true;
  }

  
}
