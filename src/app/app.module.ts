import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRoutes: Routes =[
  
    { 
     path: 'list',component: ListEmployeesComponent
    },
    {
      path: 'create',component: CreateEmployeeComponent
    },
    {
      path: '',redirectTo: '/list', pathMatch: 'full'
    }
];


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
 // import { RouterModule } from '@angular/router';
  BrowserModule,
  FormsModule,
  BsDatepickerModule.forRoot(),
    //AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
