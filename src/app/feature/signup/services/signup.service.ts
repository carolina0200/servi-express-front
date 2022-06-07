import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  public signUp(user: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}usuario`, user);
  }
}
