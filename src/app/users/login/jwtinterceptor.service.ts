import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor  {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const JWTToken = this.authService.getToken();
    if (!!JWTToken) {
      const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${JWTToken}` } });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
