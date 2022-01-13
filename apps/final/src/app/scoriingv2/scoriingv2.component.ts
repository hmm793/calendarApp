import { Component } from '@angular/core';

@Component({
  selector: 'salt-scoriingv2',
  templateUrl: './scoriingv2.component.html',
  styleUrls: ['./scoriingv2.component.css'],
})
export class Scoriingv2Component {
  editField: string;
  studentData: Array<any> = [
    {
      id: 1,
      name: 'Aurelia Vega',
      age: 30,
      companyName: 'TEST',
    },
    {
      id: 2,
      name: 'Guerra Cortez',
      age: 45,
      companyName: 'TEST',
    },
    {
      id: 3,
      name: 'Guadalupe House',
      age: 26,
      companyName: 'TEST',
    },
    {
      id: 4,
      name: 'Aurelia Vega',
      age: 30,
      companyName: 'TEST',
    },
    {
      id: 5,
      name: 'Elisa Gallagher',
      age: 31,
      companyName: 'TEST',
    },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.studentData[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
