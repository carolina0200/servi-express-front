import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Loading } from 'src/app/core/loading/loading';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private baseUrl = `${environment.apiUrl}usuario`;

  constructor(private http: HttpClient) { }

  public detail(id: number): Observable<User> {
    Loading.state.next(true);
    return this.http.get<User>(`${this.baseUrl}/${id}`).pipe(
      tap(() => Loading.state.next(false))
    );
  }

  public update(id: number, user: User): Observable<any> {
    Loading.state.next(true);
    return this.http.put<any>(`${this.baseUrl}/${id}`, user).pipe(
      tap(() => Loading.state.next(false))
    );
  }

  public delete(id: number): Observable<any> {
    Loading.state.next(true);
    return this.http.delete<any>(`${this.baseUrl}/${id}`).pipe(
      tap(() => Loading.state.next(false))
    );
  }

  public getUserList(): Observable<User[]> {
    Loading.state.next(true);
    return this.http.get<User[]>(this.baseUrl).pipe(
      tap(() => Loading.state.next(false))
    );
  }
}
