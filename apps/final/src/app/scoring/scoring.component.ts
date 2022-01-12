/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kelas } from '../models/kelas';
import { Subject } from '../models/subject';
import { KelasService } from '../services/kelas.service';
import { StudentService } from '../services/student.service';
import { SubjectService } from '../services/subject.service';
export interface PeriodicElement {
  id: string;
  name: string;
  nilai: string;
}
export interface SubjectInterface {
  _id: string;
  subject_name: string;
  teacher_id: {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    short_bio: string;
    id: string;
  };
  duration: string;
  id: string;
}

@Component({
  selector: 'salt-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css'],
})
export class ScoringComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'nilai'];
  dataSource: PeriodicElement[];
  dataSubject: Subject = {
    _id: '',
    subject_name: '',
    teacher_id: {
      _id: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      short_bio: '',
      id: '',
    },
    duration: '',
    id: '',
  };

  infoKelas: Kelas = {
    _id: '',
    class_name: '',
    teacher: {
      _id: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      short_bio: '',
      id: '',
    },
    subject: [
      {
        _id: '',
        subject_name: '',
        teacher_id: {
          _id: '',
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          short_bio: '',
          id: '',
        },
        duration: '',
        id: '',
      },
    ],
  };

  constructor(
    private studentService: StudentService,
    private subjectService: SubjectService,
    private kelasService: KelasService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        params['subjectID'];
        this._studentInit([params['subjectID']]);
        this._subjectInit([params['subjectID']]);
        this._kelasInit([params['subjectID']]);
      },
      () => {},
      () => {}
    );

    // this.dataSource = [
    //   { id: '1', name: 'Hydrogen', nilai: 'H' },
    //   { id: '2', name: 'Helium', nilai: 'He' },
    //   { id: '3', name: 'Lithium', nilai: 'Li' },
    //   { id: '4', name: 'Beryllium', nilai: 'Be' },
    //   { id: '5', name: 'Boron', nilai: 'B' },
    //   { id: '6', name: 'Carbon', nilai: 'C' },
    //   { id: '7', name: 'Nitrogen', nilai: 'N' },
    //   { id: '8', name: 'Oxygen', nilai: 'O' },
    //   { id: '9', name: 'Fluorine', nilai: 'F' },
    //   { id: '1', name: 'Neon', nilai: 'Ne' },
    // ];
  }

  private _studentInit(id: any) {
    this.studentService.getAllStudentBySubject(id).subscribe((res) => {
      res.forEach((hes, i) => {
        console.log('student-', i, hes);
      });
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
}
