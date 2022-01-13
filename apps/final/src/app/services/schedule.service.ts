import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule';

import { environment } from '../../environments/environment';
// const link1 = 'https://final-project-app-v1.herokuapp.com/api/class';
const link2 = environment.port;

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  createSchedule(event: any) {
    return this.http.post(`${link2}/api/schedule`, event);
  }

  getAllSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${link2}/api/schedule`);
  }

  getScheduleByID(id: string): Observable<Schedule> {
    console.log('IFD : ', id);
    return this.http.get<Schedule>(`${link2}/api/schedule/${id}`);
  }

  removeSchedule(id: string): Observable<Schedule> {
    return this.http.delete<Schedule>(`${link2}/api/schedule/` + id);
  }

  editSchedule(allEvent: any): Observable<Schedule[]> {
    return this.http.put<Schedule[]>(`${link2}/api/schedule`, allEvent);
  }

  editScheduleByID(id: string, data: any): Observable<Schedule> {
    return this.http.put<Schedule>(
      `${link2}/api/schedule/editEvent/${id}`,
      data
    );
  }
  getTempSchedule(dataKelas?: any): Observable<Schedule[]> {
    let params = new HttpParams();
    if (dataKelas) {
      params = params.append('schedule', dataKelas.join(','));
    }

    return this.http.get<Schedule[]>(`${link2}/api/schedule/tempSchedule`, {
      params: params,
    });
  }
}
