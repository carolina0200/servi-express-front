import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private baseUrl = `${environment.apiUrl}usuario`;

  constructor(private http: HttpClient) { }

  public detail(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  public update(id: number, user: User): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, user);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  public getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
