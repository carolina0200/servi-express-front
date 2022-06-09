import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Alerts } from 'src/app/core/alerts/alerts';
import { Loading } from 'src/app/core/loading/loading';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: string, password: string): Observable<any> {
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/x-www-form-urlencoded'}
    );

    const params = new URLSearchParams();
    params.set('username', user);
    params.set('password', password);

    Loading.state.next(true);
    return this.http.post<any>(`${environment.apiUrl}login`, params.toString(), {headers: httpHeaders})
    .pipe(
      tap(response => this.saveToken(response.access_token)),
      catchError(err => {
        console.log(err);
        Loading.state.next(false);
        Alerts.warning('El usuario o contraseña son incorrectos');
        return of(null);
      })
    );
  }

  private getUser(token: string): string {
    console.log('TOKEN', token);
    return JSON.parse(atob(token.split('.')[1])).sub;
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(this.getUser(token)));
    Loading.state.next(false);
    Alerts.successTime('Logeado correctamente');
    this.router.navigateByUrl('/home');
  }

}
