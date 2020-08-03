import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../school-service.service';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit { 
  schools=[];
  constructor(private schoolServeice: SchoolServiceService) { }

  ngOnInit() {
    this.schoolServeice.getSchools().subscribe(data => {
      this.schools = data;
    });
  }

}