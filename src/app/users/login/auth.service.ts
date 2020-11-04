import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { of } from 'rxjs'
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  login(login: string, password: string) {
    const loginDTO = {
      "login": login,
      "password": password
    };

    return this.http
      .post<any>(`${environment.API_URL}/login`, loginDTO)
      .pipe(tap<any>(response => this.setSession(response, login)))
      .pipe(shareReplay())
      .pipe(catchError(error => of(error)));
  }

  logout() {
    localStorage.removeItem("test_app_token");
  }

  private setSession(authResult: any, name: string) {
    localStorage.setItem("test_app_name", authResult.username);
    localStorage.setItem("test_app_token", authResult.token);
  }

  isLoggedIn() {
    return !!localStorage.getItem("test_app_token");
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getToken() {
    return localStorage.getItem("test_app_token");
  }

  getUserName() {
    return localStorage.getItem("test_app_name");
  }
}
