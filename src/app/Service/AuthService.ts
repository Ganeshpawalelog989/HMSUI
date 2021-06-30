import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { RegisterUser } from 'src/app/Model/RegisterUser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<RegisterUser>;
    public currentUser: Observable<RegisterUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<RegisterUser>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): RegisterUser {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        console.log("Inside the Service");
        //  let apiUrl  = `${environment.baseUrl}?`+"email="+email+"&"+"password="+password;
          // console.log("Api Url is here : ",apiUrl);
          console.log(email,password);
          return this.http.post<any>(`${environment.baseUrl}?`+"email="+email+"&"+"password="+password,{email,password})
              .pipe(map(user => {
                console.log(email,password);
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
                  console.log("Inside the RegisterUser");
                  return user;
            }));
    }
  
    register(posts : RegisterUser) : Observable<any>
    {
      debugger;
      return this.http.post<any>(`${environment.baseUrl}`,posts);
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
      //  this.currentUserSubject.next(null);
    }
}