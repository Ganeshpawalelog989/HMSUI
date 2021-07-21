import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Patient } from '../Model/Patient';






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

 getPatientList():Observable<any>
 {
   debugger;
   return this.http.get<any>(`${environment.baseUrlPatientList}`);
 }


  updatepatientstatus(id:string,status:string):Observable<any>
  {
    debugger;
    
     
   // const params = new HttpParams()
    //.set('id', id)
    //.set('status', status);

  //   const param = new HttpParams({fromObject: {id: id, status: status}});
  //   console.log(param);
  //   const obj = {id: id, status: status};
    
  //   console.log(`${environment.adminstatusUrl}`,{obj});

  //   const params = new HttpParams().set('id', id);  
  // const headers = new HttpHeaders().set('content-type', 'application/json');  
  // var body = {  
  //               status: status  
  //            }  

    //return this.http.post<any>(`${environment.adminstatusUrl}`+'/'+id,Patient);
    
    //return this.http.post<any>(`${environment.adminstatusUrl}`,Patient);
    
    //console.log(`${environment.adminstatusUrl}`+'/'+id,status)
      console.log(`${environment.adminstatusUrl}`+'/'+id+'?status='+status)
    //console.log(`${environment.adminstatusUrl}`+'/'+id+'?'+body.status,null)

    //return this.http.put<any>(`${environment.adminstatusUrl}`+'/'+id,status);
   // return this.http.put<any>("http://localhost:64913/api/Admin/updatestatus/PT8806282296?status=Active",status);
   // return this.http.put<any>("http://localhost:64913/api/Admin/updatestatus/PT8806282296/Active",status);
   
   //return this.http.put<any>(`${environment.adminstatusUrl}`+'/'+id+'?'+body.status,{headers,params});
    
   //return this.http.put<any>(`${environment.adminstatusUrl}`+'/'+id+'?'+body.status,{headers,params});
  
   return this.http.get<any>(`${environment.adminstatusUrl}`+'/'+id+'?status='+status);
   

   // return this.http.put<any>(`${environment.adminstatusUrl}`,{param});
    //return this.http.put<any>('http://localhost:64913/api/Admin/updatepatient', { params: obj});
   // return this.http.put<any>(`http://localhost:64913/api/Admin/updatepatient/${id}`,patient);
   
    //return this.http.put<any>("http://localhost:64913/api/Admin/updatepatient/PT8806282296",patient);
    
    
  } 


   
  getPhysicianList():Observable<any>
 {
   debugger;
   return this.http.get<any>(`${environment.baseUrlPhysicianList}`);
 }

 getNurseList():Observable<any>
 {
   debugger;
   return this.http.get<any>(`${environment.baseUrlNurseList}`);
 }



}
