import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientvisitService {

  constructor(private http:HttpClient) { }

  public url= "http://localhost:43945/api/patient-listing" 

  getPatientVisitList():Observable<any>{
    return this.http.get<any>(this.url);
  }

  getPatientVisitById(id : string) : Observable<any>
  {
    return this.http.get<any>(`${this.url}?id=`+id);
  }
}
