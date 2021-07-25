import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientDetails } from '../Model/patientdetails';

@Injectable({
  providedIn: 'root'
})
export class PatientdetailsService {

  constructor(private http:HttpClient) { }

  getPatientDetailById(id : string) : Observable<any>
  {
    return this.http.get<any>(`${environment.baseurlPatientDetails}`+id);
  }

  

  
}
