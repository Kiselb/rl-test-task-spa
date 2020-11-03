import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export interface IUser {
  Id: number;
  Login: string;
  Name: string;
  Email: string;
  Password?: string;
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

  public get(userId: number): Observable<IUser> {
    return this.httpClient.get<IUser | any>(`https://localhost:5001/users/${userId}`, { headers: {'Accept': 'application/json' }, withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public addNew(user: IUser): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<IUser>(`https://localhost:5001/users`, user, { headers: headers, reportProgress: false, observe: 'response', withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public update(user: IUser): Observable<any> {
    const headers = new HttpHeaders();
    console.log(user);
    headers.set('Content-Type', 'application/json');
    return this.httpClient.put<IUser>(`https://localhost:5001/users/${user.Id}`, user, { headers: headers, reportProgress: false, observe: 'response', withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }
}
