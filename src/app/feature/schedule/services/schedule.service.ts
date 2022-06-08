import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Loading } from 'src/app/core/loading/loading';
import { Schedule } from 'src/app/shared/model/schedule';
import { environment } from 'src/environments/environment';

@Injectable()
export class ScheduleService {

  private baseUrl = `${environment.apiUrl}agendamiento`;

  constructor(private http: HttpClient) { }

  public create(schedule: Schedule): Observable<Schedule> {
    Loading.state.next(true);
    return this.http.post<Schedule>(this.baseUrl, schedule).pipe(
      tap(() => Loading.state.next(false))
    );
  }

  public getById(id: number): Observable<Schedule> {
    Loading.state.next(true);
    return this.http.get<Schedule>(`${this.baseUrl}/${id}`).pipe(
      tap(() => Loading.state.next(false))
    );
  }

  public update(id: number, schedule: Schedule): Observable<any> {
    Loading.state.next(true);
    return this.http.put<any>(`${this.baseUrl}/${id}`, schedule).pipe(
      tap(() => Loading.state.next(false))
    );
  }

  public delete(id: number): Observable<any> {
    Loading.state.next(true);
    return this.http.delete<any>(`${this.baseUrl}/${id}`).pipe(
      tap(() => Loading.state.next(false))
    );
  }

  public getList(): Observable<Schedule[]> {
    Loading.state.next(true);
    return this.http.get<Schedule[]>(this.baseUrl).pipe(
      tap(() => Loading.state.next(false))
    );
  }
}
