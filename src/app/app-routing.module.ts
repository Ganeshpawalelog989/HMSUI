import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmerencyInfoComponent } from './modules/emerency-info/emerency-info.component';
import { PatientDetailsComponent } from './modules/patient-details/patient-details.component';

import{ForgotPasswordComponent} from 'src/app/modules/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from 'src/app/modules/change-password/change-password.component';
import{PatientMedicationDetailsComponent} from 'src/app/modules/patient-medication-details/patient-medication-details.component';
import { VisitDetailsComponent } from './modules/visit-details/visit-details.component';
import { DiagnosisComponent } from './modules/diagnosis/diagnosis.component';
import { ProcedureComponent } from './modules/procedure/procedure.component';
import { SendnotesComponent } from './modules/sendnotes/sendnotes.component';
const routes: Routes = [
  {path : '' , 
  component : DefaultComponent, 
  children : [
  { path : 'dashboard' , 
  component : DashboardComponent ,
  },

  {path : 'sendnotes' , component : SendnotesComponent},
  {path : 'PatientDetails' , component : PatientDetailsComponent},
  
  {path : ' EmerencyInfo' , component : EmerencyInfoComponent},
 
  
  {path:'forgot-password',
   component:ForgotPasswordComponent
  },
  {path:'change-password',
   component:ChangePasswordComponent
  },
  {path:'patient-medication-details',
   component:PatientMedicationDetailsComponent
  },
  {path: 'visit-details',
  component:VisitDetailsComponent
  },
  {
    path: 'diagnosis',
    component: DiagnosisComponent
  },
  {
    path: 'procedure',
    component: ProcedureComponent
  }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
