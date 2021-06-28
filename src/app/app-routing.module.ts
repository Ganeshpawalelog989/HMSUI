import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmerencyInfoComponent } from './modules/emerency-info/emerency-info.component';
import { PatientDetailsComponent } from './modules/patient-details/patient-details.component';
import{ForgotPasswordComponent} from 'src/app/modules/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from 'src/app/modules/change-password/change-password.component';
import{PatientMedicationDetailsComponent} from 'src/app/modules/patient-medication-details/patient-medication-details.component';
import { LoginComponent } from './modules/login/login.component';
import { combineAll } from 'rxjs/operators';
import { RegistrationComponent } from './modules/registration/registration.component';
import { SchedulingComponent } from './modules/scheduling/scheduling.component';
import { AddAppointmentComponent } from './modules/scheduling/add-appointment/add-appointment.component';
import { DeleteAppointmentComponent } from './modules/scheduling/delete-appointment/delete-appointment.component';
import { EditAppointmentComponent } from './modules/scheduling/edit-appointment/edit-appointment.component';
import { PhysicianViewComponent } from './modules/physician-view/physician-view.component';
import { SendnotesComponent } from './modules/sendnotes/sendnotes.component';
import { RecieveNotesComponent } from './modules/recieve-notes/recieve-notes.component';
import { AdminComponent } from './modules/admin/admin.component';
import { PatientUserManagementComponent } from './modules/admin/patient-user-management/patient-user-management.component';
import { HospitalUserComponent } from './modules/admin/hospital-user/hospital-user.component';
import { AlleryComponent } from './modules/allery/allery.component';
import { PatientRegistrationComponent } from './modules/patient-registration/patient-registration.component';

const routes: Routes = [
  {path : '' , 
  component : DefaultComponent, 
  children : [
  { path : 'dashboard' , component : DashboardComponent ,},
  
  {path : 'PatientDetails' , component : PatientDetailsComponent},
  
  {path : 'emerencyinfo' , component : EmerencyInfoComponent},
  
  {path:'forgot-password', component:ForgotPasswordComponent},
  
  {path:'change-password',  component:ChangePasswordComponent},
  
  {path:'patient-medication-details',  component:PatientMedicationDetailsComponent},
  
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'registeration' , component : RegistrationComponent
  },
  {
    path : 'scheduling' , component : SchedulingComponent
  },
  {
    path : 'addappointment' , component : AddAppointmentComponent
  },
  { path: 'edit/:id', component: AddAppointmentComponent },
  {
    path : 'deleteAppointment' , component : DeleteAppointmentComponent
  },
  {
    path : 'physician' , component : PhysicianViewComponent
  },
  {
    path : 'sendnotes' , component : SendnotesComponent
  },
  {
    path : 'recievenotes' , component : RecieveNotesComponent
  },
  {
    path : 'admin' , component : AdminComponent
  },
  {
    path : 'patientuser' , component : PatientUserManagementComponent
  },
  {
    path : 'hospitaluser' , component : HospitalUserComponent
  },
  {
    path : 'allery' , component : AlleryComponent
  },
  {
    path : 'patientregister' , component : PatientRegistrationComponent
  }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
