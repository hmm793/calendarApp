import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kelas } from '../models/kelas';

import { environment } from '../../environments/environment';
// const link1 = 'https://final-project-app-v1.herokuapp.com/api/class';
const link2 = environment.port;

@Injectable({
  providedIn: 'root',
})
export class KelasService {
  constructor(private http: HttpClient) {}
  getAllClass(): Observable<Kelas[]> {
    return this.http.get<Kelas[]>(link2 + '/api/class');
  }
  getClassBySubject(id: any): Observable<Kelas[]> {
    return this.http.get<Kelas[]>(`${link2}/api/class/getClassBySubject/${id}`);
  }

  // getTempClasses(kelas?: any): Observable<any[]> {
  //   let params = new HttpParams();
  //   if (kelas) {
  //     params = params.append('kelas', kelas.join(','));
  //   }

  //   return this.http.get<any[]>(
  //     `https://final-project-app-v1.herokuapp.com/api/class/tempClass`,
  //     {
  //       params: params,
  //     }
  //   );
  // }
}
