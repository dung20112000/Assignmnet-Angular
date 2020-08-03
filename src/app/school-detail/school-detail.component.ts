import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../school-service.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  schoolData= null;
  classes=[];
  constructor(
    private schoolServeice: SchoolServiceService,
    private activeRoute: ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params =>{
      let schoolId = params.get('schoolId');
      this.schoolServeice.getSchoolById(schoolId).subscribe(data =>{
        this.schoolData = data;
      })
      this.schoolServeice.getClasses(schoolId).subscribe(data => {
      this.classes = data;
    });
    });    
  }
  removeSchool(){
    let ok = confirm('Bạn có muốn xóa trường này không');
    if(ok){
      this.schoolServeice.removeSchool(this.schoolData.id).subscribe(data => {
      this.route.navigate(['']);
    })
    
    }
  }

}