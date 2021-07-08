
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
import { Patient } from 'src/app/Model/Patient';

import { catchError, map } from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


 // baseUrl:string="http://localhost:3000/posts";

 private currentUserSubject: BehaviorSubject<Patient>;
 public currentUser: Observable<Patient>;
  constructor (private http: HttpClient) { 
     this.currentUserSubject = new BehaviorSubject<Patient>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Patient {
    return this.currentUserSubject.value;
    }

  getAllPost(): Observable<any>  {
   return this.http.get(`${environment.baseUrl}`)
  }

  getById(id:number) : Observable<any>
  {
    return this.http.get<Patient>(`${environment.baseUrl}?`+'id='+id);
  }
  update(patient : Patient) : Observable<any>
  {
      return this.http.post<any>(`${environment.baseUrl}?`+'id='+patient.Empid,patient);
  }

  SaveRegister(patient : Patient): Observable<Patient>{
   return this.http.post<Patient>('',patient)
   
 }

  deletePatient(id : number) : Observable<any>
  {
    return this.http.delete<any>(`${environment.baseUrl}?`+'id='+id);
  }

}
