import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminmasterdataService {

  constructor(private http: HttpClient) { }

  getAllergyMaterdataList():Observable<any>
  {
    debugger;
    return this.http.get<any>(`${environment.baseurlAllergyMasterData}`);
  }
 
  getDiagnosisMaterdataList():Observable<any>
  {
    debugger;
    return this.http.get<any>(`${environment.baseurlAllergyMasterData}`);
  }
  getMedicationMaterdataList():Observable<any>
  {
    debugger;
    return this.http.get<any>(`${environment.baseurlAllergyMasterData}`);
  }
  getProcedureMaterdataList():Observable<any>
  {
    debugger;
    return this.http.get<any>(`${environment.baseurlAllergyMasterData}`);
  }
}
