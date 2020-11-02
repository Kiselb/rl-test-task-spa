import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export interface IUser {
  Id: number;
  Login: string;
  Name: string;
  Email: string;
  Password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO: Filter and Pagination

  public getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[] | any>(`https://localhost:5001/users`, { headers: {'Accept': 'application/json' }, withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }
}
