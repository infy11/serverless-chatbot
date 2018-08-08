import { Injectable } from '@angular/core';
import { Timetable } from './timetable';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs/';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',

   
  })
};

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) { }

  gettimetable(): Observable<Timetable> 
  {
    return this.http.get<Timetable>('https://po379f2y65.execute-api.us-east-1.amazonaws.com/beta/timetable-api');
  }

  gettimetablearray():Observable<Timetable[]>
  {
    return this.http.get<Timetable[]>('https://po379f2y65.execute-api.us-east-1.amazonaws.com/beta/timetable-api');
  }


  addtimetable (timetable: Timetable): Observable<Timetable> {

    return this.http.post<Timetable>('https://po379f2y65.execute-api.us-east-1.amazonaws.com/beta/timetable-api', timetable, httpOptions)

    
      
  }
  
  puttimetable(timetable:Timetable):Observable<Timetable>{
    return this.http.put<Timetable>('https://po379f2y65.execute-api.us-east-1.amazonaws.com/beta/timetable-api',timetable,httpOptions)
  }

}
