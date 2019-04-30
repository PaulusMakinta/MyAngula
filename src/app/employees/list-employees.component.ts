import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Eddy',
      gender:'Male',
      contactPreference: 'Email',
      email: 'eddy71g@gmail.com',
      dateOfBirth: new Date('10/07/1988'),
      department: "IT",
      isActive: true,
      photoPath: 'assets/images/eddy.png'
    },
    {
      id: 2,
      name: 'Annah',
      gender:'female',
      contactPreference: 'Email',
      email: 'eddy71g@gmail.com',
      dateOfBirth: new Date('07/16/1992'),
      department: "IT",
      isActive: true,
      photoPath: 'assets/images/annah.png'
    },
    {
      id: 3,
      name: 'Hemsley',
      gender:'Male',
      contactPreference: 'Email',
      email: 'eddy71g@gmail.com',
      dateOfBirth: new Date('12/09/2011'),
      department: "IT",
      isActive: true,
      photoPath: 'assets/images/hemsley.png'
    }
  
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
