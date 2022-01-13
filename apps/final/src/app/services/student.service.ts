/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// const link1 = 'https://final-project-app-v1.herokuapp.com/api/class';
const link2 = environment.port;

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getAllStudentBySubject(id: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${link2}/api/student/getAllStudentRelatedToTheSubject/${id}`
    );
  }
}
