import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface IRole {
  Id: number;
  Name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO: Filter and Pagination

  public getRoles(): Observable<IRole[]> {
    return this.httpClient.get<IRole[] | any>(`${environment.API_URL}/roles`, { headers: {'Accept': 'application/json' }, withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }
  public addNew(role: IRole): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<IRole>(`${environment.API_URL}/roles`, role, { headers: headers, reportProgress: false, observe: 'response', withCredentials: true })
    .pipe(map(response => response))
    .pipe(catchError(error => { console.log(error); return throwError(error); }));
  }

}
