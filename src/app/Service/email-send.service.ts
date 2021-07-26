import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmailSend} from '../Model/email-send';
@Injectable({
  providedIn: 'root'
})
export class EmailSendService {

  constructor(private http:HttpClient) { }
  emailUrl = "http://localhost:37580/api/mail/send";

  emailSendRegistration(dataToBeSend : EmailSend) : Observable<any>
  {
    let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');   
    return this.http.post<any>(`${this.emailUrl}`,dataToBeSend,{headers:headers});
  }

}
