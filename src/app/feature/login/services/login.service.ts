import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: string, password: string): Observable<any> {
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/x-www-form-urlencoded'}
    );

    const params = new URLSearchParams();
    params.set('username', user);
    params.set('password', password);

    return this.http.post<any>(`${environment.apiUrl}login`, params.toString(), {headers: httpHeaders})
    .pipe(
      tap(response => this.saveToken(response.accessToken)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  private getUser(token: string): string {
    return JSON.parse(atob(token.split('.')[1])).sub;
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(this.getUser(token)));
  }

}
