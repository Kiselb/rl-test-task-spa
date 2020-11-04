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

export interface IUsersRoles {
  UserId: number;
  RoleId: number;
  RoleName: string;
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
    return this.httpClient.get<IUser[] | any>(`${environment.API_URL}/users`, { headers: {'Accept': 'application/json' }, withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public get(userId: number): Observable<IUser> {
    return this.httpClient.get<IUser | any>(`${environment.API_URL}/users/${userId}`, { headers: {'Accept': 'application/json' }, withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public addNew(user: IUser): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<IUser>(`${environment.API_URL}/users`, user, { headers: headers, reportProgress: false, observe: 'response', withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public update(user: IUser): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.put<IUser>(`${environment.API_URL}/users/${user.Id}`, user, { headers: headers, reportProgress: false, observe: 'response', withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public getUsersRoles(userId: number): Observable<IUsersRoles[]> {
    return this.httpClient.get<IUsersRoles[] | any>(`${environment.API_URL}/users/${userId}/roles`, { headers: {'Accept': 'application/json' }, withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public addUsersRoles(userId: number, roleId: number): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<IUser>(`${environment.API_URL}/users/${userId}/roles`, { UserId: userId, RoleId: roleId}, { headers: headers, reportProgress: false, observe: 'response', withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

  public removeUsersRoles(userId: number, roleId: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.API_URL}/users/${userId}/roles/${roleId}`, { withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }
}
