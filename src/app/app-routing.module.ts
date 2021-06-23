import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import{ForgotPasswordComponent} from 'src/app/modules/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from 'src/app/modules/change-password/change-password.component';
import{PatientMedicationDetailsComponent} from 'src/app/modules/patient-medication-details/patient-medication-details.component';
const routes: Routes = [
  {path : '' , 
  component : DefaultComponent, 
  children : [
  { path : '' , 
  component : DashboardComponent },
  {path:'forgot-password',
   component:ForgotPasswordComponent
  },
  {path:'change-password',
   component:ChangePasswordComponent
  },
  {path:'patient-medication-details',
   component:PatientMedicationDetailsComponent
  }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
