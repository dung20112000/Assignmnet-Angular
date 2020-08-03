import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../school-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {
  schoolForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('',[
      Validators.required
    ]),
    logo: new FormControl('',[
      Validators.required,
      Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)
    ]),
    address: new FormControl('',[
      Validators.required
    ]),
    president: new FormControl('',[
      Validators.required
    ]),
    province: new FormControl('',[
      Validators.required
    ])
  })

  get name() { return this.schoolForm.get('name');}
  get logo() { return this.schoolForm.get('logo');}
  get address() { return this.schoolForm.get('address');}
  get president() { return this.schoolForm.get('president');}
  get province() { return this.schoolForm.get('province');}

  constructor(
    private schoolServeice: SchoolServiceService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }
  
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let schoolId = params.get('schoolId');
      this.schoolServeice.getSchoolById(schoolId).subscribe(data => {
        this.schoolForm.setValue(data);
      })
    })
  }
  saveSchool(){
    if(this.schoolForm.value.id == null){
      this.schoolServeice.saveSchool(this.schoolForm.value).subscribe(data => {
        this.route.navigate(['']);
      })
    }else{
      this.schoolServeice.updateSchool(this.schoolForm.value).subscribe(data => {
        this.route.navigate([`detail/${this.schoolForm.value.id}`]);
      })
    }
  }

}