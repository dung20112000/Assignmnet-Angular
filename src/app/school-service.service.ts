import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const scUrl= 'https://5e79b4f817314d00161333fe.mockapi.io/school';
@Injectable()
export class SchoolServiceService {

  constructor(private http: HttpClient) { }
  // school
  getSchools(): Observable<any>{ //chờ request gửi và trả về vì js là ngôn ngữ bất đồng bộ
    return this.http.get<any>(scUrl);
  }
  getSchoolById(schoolId):Observable<any>{
    let url =`${scUrl}/${schoolId}`;
    return this.http.get<any>(url);
  }
  removeSchool(schoolId):Observable<any>{
    let url = `${scUrl}/${schoolId}`;
    return this.http.delete<any>(url);
  }
  saveSchool(schoolOject):Observable<any>{
    return this.http.post<any>(scUrl, schoolOject );
  }
  updateSchool(schoolOject):Observable<any>{
    let url = `${scUrl}/${schoolOject.id}`;
    return this.http.put<any>(url, schoolOject);
  }

  //classs
  getClasses(schoolId): Observable<any>{
    return this.http.get<any>(`${scUrl}/${schoolId}/classes`)
  }
  getClassById(schoolId, classId): Observable<any>{
    let url = `${scUrl}/${schoolId}/classes/${classId}`;
    return this.http.get<any>(url);
  }
  removeClass(schoolId, classId): Observable<any>{
    let url = `${scUrl}/${schoolId}/classes/${classId}`;
    return this.http.delete<any>(url);
  }
  saveClass(classOject, schoolId): Observable<any>{
    let url = `${scUrl}/${schoolId}/classes`;
    return this.http.post<any>(url,classOject );
  }
  editClass(classOject, schoolId): Observable<any>{
    let url = `${scUrl}/${schoolId}/classes/${classOject.id}`;
    return this.http.put<any>(url, classOject);
  }


}