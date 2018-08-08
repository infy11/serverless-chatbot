import { Injectable } from '@angular/core';
import { Paper } from './paper';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http:HttpClient) { }

  addpaper(paper:Paper):Observable<Paper>{
    return this.http.post<Paper>("https://k7x62hcr0j.execute-api.us-east-1.amazonaws.com/beta/paper_api",paper,httpOptions)
  }

  getpaper():Observable<Paper[]>{
    return this.http.get<Paper[]>("https://k7x62hcr0j.execute-api.us-east-1.amazonaws.com/beta/paper_api")
  }
  
  putpaper(paper:Paper):Observable<Paper>{
    return this.http.put<Paper>("https://k7x62hcr0j.execute-api.us-east-1.amazonaws.com/beta/paper_api",paper,httpOptions)
  }

}
