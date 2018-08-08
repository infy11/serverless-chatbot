import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Syllabus} from  "./syllabus";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
   
  })
};

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  constructor(private http: HttpClient) { }

  addsyllabus(syllabus:Syllabus):Observable<Syllabus>{
    return this.http.post<Syllabus>("https://wd47s0r5af.execute-api.us-east-1.amazonaws.com/prod/syllabus-api",syllabus,httpOptions)
  }

  getsyllabus():Observable<Syllabus[]>{
    return this.http.get<Syllabus[]>("https://wd47s0r5af.execute-api.us-east-1.amazonaws.com/prod/syllabus-api")
  }
  
  putsyllabus(syllabus:Syllabus):Observable<Syllabus>{
    return this.http.put<Syllabus>("https://wd47s0r5af.execute-api.us-east-1.amazonaws.com/prod/syllabus-api",syllabus,httpOptions)
  }
}
