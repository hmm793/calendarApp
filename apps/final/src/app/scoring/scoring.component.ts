/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kelas } from '../models/kelas';
import { Subject } from '../models/subject';
import { KelasService } from '../services/kelas.service';
import { StudentService } from '../services/student.service';
import { SubjectService } from '../services/subject.service';
import { TeacherService } from '../services/teacher.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface PeriodicElement {
  id: string;
  name: string;
  nilai: string;
}

@Component({
  selector: 'salt-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css'],
})
export class ScoringComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  editField: string;
  idSubject: any;
  studentData: PeriodicElement[];
  studentData1: PeriodicElement[] = [];
  studentData2;
  dataSubject: Subject;
  infoKelas: Kelas;
  tempData: PeriodicElement;
  constructor(
    private studentService: StudentService,
    private subjectService: SubjectService,
    private kelasService: KelasService,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['subjectID'];
      this._kelasInit([params['subjectID']]);
      this._subjectInit([params['subjectID']]);
      this._studentInit([params['subjectID']]);
      this.idSubject = params['subjectID'];
    });
  }

  private _subjectInit(idSubject: any) {
    this.subjectService.getSubjectByID(idSubject).subscribe((res) => {
      this.dataSubject = res;
    });
  }
  private _kelasInit(idSubject: any) {
    this.kelasService.getClassBySubject(idSubject).subscribe((res) => {
      this.infoKelas = res[0];
    });
  }
  private _studentInit(id: any) {
    this.studentService.getAllStudentBySubject(id).subscribe((res) => {
      res.forEach((hes) => {
        const tempScore = hes.subject.find((el) => {
          if (el.subject_name == this.idSubject) {
            return el;
          }
        });
        this.tempData = {
          id: hes.id,
          name: `${hes.first_name} ${hes.last_name}`,
          nilai: tempScore.score_subject,
        };
        this.studentData1.push(this.tempData);
      });
      this.studentData = this.studentData1;
    });
    this.studentData2 = this.studentData1;
  }

  changeValue(id: number, property: string, event: any) {
    this.studentData2[id][property] = event;
  }

  submit() {
    this.teacherService
      .setStudentScore(this.idSubject, this.studentData2)
      .subscribe((res) => {
        this._snackBar.open('Jadwal Berhasil Dibuat', 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });

    window.location.reload();
  }
}
