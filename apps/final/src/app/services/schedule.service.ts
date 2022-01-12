import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  createSchedule(event: any) {
    return this.http.post(`http://localhost:3000/api/schedule`, event);
  }

  getAllSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`http://localhost:3000/api/schedule`);
  }

  getScheduleByID(id: string): Observable<Schedule> {
    console.log('IFD : ', id);
    return this.http.get<Schedule>(`http://localhost:3000/api/schedule/${id}`);
  }

  removeSchedule(id: string): Observable<Schedule> {
    return this.http.delete<Schedule>(
      `http://localhost:3000/api/schedule/` + id
    );
  }

  editSchedule(allEvent: any): Observable<Schedule[]> {
    return this.http.put<Schedule[]>(
      `http://localhost:3000/api/schedule`,
      allEvent
    );
  }

  editScheduleByID(id: string, data: any): Observable<Schedule> {
    return this.http.put<Schedule>(
      `http://localhost:3000/api/schedule/editEvent/${id}`,
      data
    );
  }
  getTempSchedule(dataKelas?: any): Observable<Schedule[]> {
    let params = new HttpParams();
    if (dataKelas) {
      params = params.append('schedule', dataKelas.join(','));
    }

    return this.http.get<Schedule[]>(
      `http://localhost:3000/api/schedule/tempSchedule`,
      {
        params: params,
      }
    );
  }
}
