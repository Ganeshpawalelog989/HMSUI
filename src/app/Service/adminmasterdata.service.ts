import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ProcedureData } from '../Model/ProcedureData';
import { MedicationData } from '../Model/MedicationData';
import { DiagnosisData } from '../Model/DiagnosisData';
import { AllergyData } from '../Model/AllergyData';
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
    return this.http.get<any>(`${environment.baseurlDiagnosisMasterData}`);
  }
  getMedicationMaterdataList():Observable<any>
  {
    debugger;
    return this.http.get<any>(`${environment.baseurlMedicationMasterData}`);
  }
  getProcedureMaterdataList():Observable<any>
  {
    debugger;
    return this.http.get<any>(`${environment.baseurlProcedureMasterData}`);
  }


  saveproceduredata(procedure : ProcedureData) : Observable<any>
  {
    debugger;
    return this.http.post<any>(`${environment.baseurlProcedureMasterDataSave}`,procedure);
  }

  savemedicationdata(medication : MedicationData) : Observable<any>
  {
    debugger;
    return this.http.post<any>(`${environment.baseurlMedicationMasterDataSave}`,medication);
  }

  savediagnosisdata(diagnosis : DiagnosisData) : Observable<any>
  {
    debugger;
    return this.http.post<any>(`${environment.baseurlDiagnosisMasterDataSave}`,diagnosis);
  }

  saveallergydata(allergy : AllergyData) : Observable<any>
  {
    debugger;
    return this.http.post<any>(`${environment.baseurlAllergyMasterDataSave}`,allergy);
  }

}
