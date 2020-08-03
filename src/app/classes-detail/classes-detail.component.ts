import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../school-service.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-classes-detail',
  templateUrl: './classes-detail.component.html',
  styleUrls: ['./classes-detail.component.css']
})
export class ClassesDetailComponent implements OnInit {
  classData = null;
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
        this.classData = data;
      })
    })
  }
  removeClass(){
    let ok = confirm('Bạn có muốn xóa lớp này không');
    if(ok){
      this.activeRoute.paramMap.subscribe(param =>{
      let schoolId = param.get('schoolId');
      this.schoolServeice.removeClass(schoolId,this.classData.id).subscribe(data =>{
        this.route.navigate([`detail/${schoolId}`]);
      })
    })
    }
    
  }

}