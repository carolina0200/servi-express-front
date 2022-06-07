import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/shared/model/schedule';
import { environment } from 'src/environments/environment';

@Injectable()
export class ScheduleService {

  private baseUrl = `${environment.apiUrl}agendamiento`;

  constructor(private http: HttpClient) { }

  public create(schedule: Schedule): Observable<any> {
    return this.http.post<any>(this.baseUrl, schedule);
  }

  public getById(id: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.baseUrl}/${id}`);
  }

  public update(id: number, schedule: Schedule): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, schedule);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  public getList(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.baseUrl);
  }
}
