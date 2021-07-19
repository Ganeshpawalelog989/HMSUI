import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { RegisterUser } from 'src/app/Model/RegisterUser';
import { User,NurseUser,PatientUser,PhysicianUser,HospitalUser } from 'src/app/Model/User';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<PatientUser>;
    public currentUser: Observable<PatientUser>;

    public currentHospitalUserSubject:BehaviorSubject<HospitalUser>;//
    public currentHospitalUser: Observable<HospitalUser>;//
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<PatientUser>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();

        this.currentHospitalUserSubject = new BehaviorSubject<HospitalUser>(JSON.parse(localStorage.getItem('currentUser') || '{}'));//
        this.currentHospitalUser = this.currentHospitalUserSubject.asObservable();//
    }

    public get currentUserValue(): PatientUser {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        console.log("Inside the Service");
        //  let apiUrl  = `${environment.baseUrl}?`+"email="+email+"&"+"password="+password;
          // console.log("Api Url is here : ",apiUrl);
          console.log(email,password);
          return this.http.post<any>(`${environment.baseUrlLogin}?`+"email="+email+"&"+"password="+password,{email,password})
              .pipe(map(user => {
                console.log(email,password);
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  console.log(user);
                  this.currentUserSubject.next(user);
                  console.log("Inside the PatientUser");
                  return user;
            }));
    }
  
    register(posts : PatientUser) : Observable<any>
    {
      debugger;
      return this.http.post<any>(`${environment.baseUrl}`,posts);
    }


    hospregister(posts : HospitalUser) : Observable<any>
    {
      debugger;
      return this.http.post<any>(`${environment.basehospitalUrl}`,posts);
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
      //  this.currentUserSubject.next(null);
    }
}