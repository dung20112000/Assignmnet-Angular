import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../school-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-classes-form',
  templateUrl: './classes-form.component.html',
  styleUrls: ['./classes-form.component.css']
})
export class ClassesFormComponent implements OnInit {
  classForm = new FormGroup({
    id: new FormControl(null),
    schoolId: new FormControl(''),
    name: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-zA-Z]+[ a-zA-Z ]*")
    ]),
    roomNumber: new FormControl('',[
      Validators.required
    ]),
    totalStudent: new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]*")
    ]),
    mainTeacher: new FormControl('',[
      Validators.required
    ]),
  })
  get name() { return this.classForm.get('name');}
  get roomNumber() { return this.classForm.get('roomNumber');}
  get totalStudent() { return this.classForm.get('totalStudent');}
  get mainTeacher() { return this.classForm.get('mainTeacher');}
  constructor(
    private schoolServeice: SchoolServiceService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(param => {
      let schoolId = param.get('schoolId');
      let classId = param.get('classId');
      this.schoolServeice.getClassById(schoolId,classId).subscribe(data =>{
        this.classForm.setValue(data);
      })
    })
  }

  saveClass(){
    if(this.classForm.value.id==null){
      this.activeRoute.paramMap.subscribe(param =>{
        let schoolId = param.get('schoolId');
        this.schoolServeice.saveClass(this.classForm.value,schoolId).subscribe(data =>{
          this.route.navigate([`detail/${schoolId}`])
        })
      })
    }else{
      this.activeRoute.paramMap.subscribe(param =>{
        let schoolId = param.get('schoolId');
        this.schoolServeice.editClass(this.classForm.value,schoolId).subscribe(data =>{
          this.route.navigate([`detail/${schoolId}`])
        })
      })
    }
  }
}