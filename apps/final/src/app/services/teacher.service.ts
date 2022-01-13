import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// const link1 = 'https://final-project-app-v1.herokuapp.com/api/class';
const link2 = environment.port;
@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  setStudentScore(isSubject: any, data: any): Observable<any> {
    return this.http.post<any>(
      `${link2}/api/teacher/scorring/${isSubject}`,
      data
    );
  }
}
