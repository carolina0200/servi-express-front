import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Loading } from 'src/app/core/loading/loading';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  public signUp(user: User): Observable<any> {
    Loading.state.next(true);
    return this.http.post<any>(`${environment.apiUrl}usuario`, user).pipe(
      tap(() => Loading.state.next(false))
    );;
  }
}
