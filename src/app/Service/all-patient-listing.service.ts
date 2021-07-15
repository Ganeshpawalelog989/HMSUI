import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class AllPatientListingService {

  constructor(private http: HttpClient) { }


//   register(posts : PatientUser) : Observable<any>
//   {
//     debugger;
//     return this.http.post<any>(`${environment.baseUrl}`,posts);
//   }
 
//   getPatients() : Observable<IProduct[]>{
//     return this.http.get(`${environment.baseUrl}`)
//         .map((response: Response) => <IProduct[]>response.json())
//         .do(responseData => console.log('All: ' + JSON.stringify(responseData)))
//         .catch(this.handleError);
// }

// private handleError(error: Response){
//   console.error(error);

//   return Observable.throw(error.json().error || 'Server error');
  
// }

// getPatientList():Observable<any[]>
// {
//   return this.http.get<any>(`${environment.baseUrl}`);
// }

}
