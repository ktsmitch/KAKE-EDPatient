import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ClinicService} from '../clinic.service'; 
import {Clinical} from '../app/clinical';
import { UserService } from '../app/user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup;
  incorrect: boolean = false; 
  
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _clinicService: ClinicService, private _router: Router,private userService: UserService) { 
      this.loginForm = this._fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      })
      }


  ngOnInit() {
  }

  submit() {

    if (!this.loginForm.valid) {
      return;
    }
    if((this.loginForm.get('username').value === 'superuser') && (this.loginForm.get('password').value === 'KAKE')){
      this.userService.logIn(); 
      this._router.navigate(['/admin']);  
    } else {
      this.incorrect = true; 
    }
        
   }
   
      get username() { return this.loginForm.get('username'); }
      get password() { return this.loginForm.get('password'); }
  
}
