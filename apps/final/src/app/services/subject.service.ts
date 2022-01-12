import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';
@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  getAllSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`http://localhost:3000/api/subject`);
  }
  getSubjectByID(id: string): Observable<Subject> {
    return this.http.get<Subject>(`http://localhost:3000/api/subject/${id}`);
  }
}
