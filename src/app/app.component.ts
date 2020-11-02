import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from './users/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TEST-App';

  constructor(
    //private authService: AuthService,
    private router: Router,
  ) { }

  userLoggedIn() {
    // return this.authService.isLoggedIn();
  }

  logout() {
    // this.authService.logout();
    // this.router.navigate(["login"]);
  }

  userName() {
    // return this.authService.getUserName();
  }
}
