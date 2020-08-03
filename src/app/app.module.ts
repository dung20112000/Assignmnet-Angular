import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SchoolFormComponent } from './school-form/school-form.component';
import { SchoolServiceService } from './school-service.service';
import { SchoolComponent } from './school/school.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { ClassesDetailComponent } from './classes-detail/classes-detail.component';
import { ClassesFormComponent } from './classes-form/classes-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports:[ BrowserModule, FormsModule, HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: SchoolComponent},
      {path: 'detail/:schoolId', component: SchoolDetailComponent},
      {path: 'editSchool/:schoolId', component: SchoolFormComponent},
      {path: 'addSchool', component: SchoolFormComponent},
      {path: 'detail/:schoolId/detailClass/:classId', component: ClassesDetailComponent},
      {path: 'addClass/:schoolId', component: ClassesFormComponent},
      {path: 'detail/:schoolId/editClass/:classId', component: ClassesFormComponent},
      {path: 'hello-polytechnic', component: HelloComponent},
    ]),
    NgbModule
   ],
  declarations: [ AppComponent, SchoolFormComponent, SchoolComponent, 
    SchoolDetailComponent, ClassesDetailComponent, ClassesFormComponent, HelloComponent ],//mảng chứa các module sử dụng trong ứng dụng
  bootstrap:    [ AppComponent ],
  providers: [SchoolServiceService]
})
export class AppModule { }
