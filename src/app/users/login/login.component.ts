import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private router: Router,
    private authService: AuthService    
  ) { }

  tryLogin() {
    console.log(this.loginForm.controls["ctrlName"].value, this.loginForm.controls["ctrlPassword"].value);
    this.authService
      .login(this.loginForm.controls["ctrlName"].value, this.loginForm.controls["ctrlPassword"].value)
      .subscribe(
        response => {
          if (!(response instanceof HttpErrorResponse)) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          }
        },
        error => {
          console.dir(error);
        }
      );
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      ctrlName: new FormControl(null, Validators.required),
      ctrlPassword: new FormControl(null, Validators.required)
    });
  }

}
