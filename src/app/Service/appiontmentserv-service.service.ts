import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppiontmentservServiceService {

  constructor(private http : HttpClient) { }
  baseUrl = "http://localhost:3000/physician_name_list";

  getAllPhsicianName() : Observable<any>
  {
     return this.http.get<any>(`${this.baseUrl}`);
  }
}
