import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import {Department} from '../models/department.model';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewphoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] =[
   
    {id: 1, name: "HelpDesk"},
    { id: 2,name: "Human Resource"},
    { id: 3,name: "Accounting"},
    {id: 4 ,name: "IT"} ,
    {id: 5 ,name: "select_Department"}
  ] ;
  department = "5"
  constructor() { 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  togglePhotoPreview(){
   this.previewphoto = !this.previewphoto;
  }

  ngOnInit() {
  }
saveEmployee(empForm: NgForm): void{
  console.log(empForm.value);
}
}
