import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Layout/default/default.component';
import { EmerencyInfoComponent } from './modules/emerency-info/emerency-info.component';
import { PatientDetailsComponent } from './modules/patient-details/patient-details.component';
import { ForgotPasswordComponent } from 'src/app/modules/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from 'src/app/modules/change-password/change-password.component';
import { PatientMedicationDetailsComponent } from 'src/app/modules/patient-medication-details/patient-medication-details.component';
import { LoginComponent } from './homescreen/homescreen/login/login.component';
import { combineAll } from 'rxjs/operators';
import { RegistrationComponent } from './modules/registration/registration.component';
import { PhysicianViewComponent } from './modules/physician-view/physician-view.component';
import { SendnotesComponent } from './modules/sendnotes/sendnotes.component';
import { RecieveNotesComponent } from './modules/recieve-notes/recieve-notes.component';
import { AdminComponent } from './modules/admin/admin.component';
import { PatientUserManagementComponent } from './modules/admin/patient-user-management/patient-user-management.component';
import { HospitalUserComponent } from './modules/admin/hospital-user/hospital-user.component';
import { AlleryComponent } from './modules/allery/allery.component';
import { PatientRegistrationComponent } from './modules/patient-registration/patient-registration.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HostipaluserRegistrationComponent } from './homescreen/hostipaluser-registration/hostipaluser-registration.component';
import { PatientUserShedulingComponent } from './modules/patient-user-sheduling/patient-user-sheduling.component';
import { AppointmentDeleteComponent } from './modules/appointment-delete/appointment-delete.component';
import { ViewSechedulingComponent } from './modules/view-secheduling/view-secheduling.component';
import { NurselayoutComponent } from './Layout/nurselayout/nurselayout.component';
import { PatientlayoutComponent } from './Layout/patientlayout/patientlayout.component';
import { PhysicianlayoutComponent } from './Layout/physicianlayout/physicianlayout.component';
import { NurseMyprofileComponent } from './modules/nurse-myprofile/nurse-myprofile.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { PhysicianMyprofileComponent } from './modules/physician-myprofile/physician-myprofile.component';
import { AdminpatientregistrationComponent } from './modules/adminpatientregistration/adminpatientregistration.component';
import { PatientVisitComponent } from './modules/patient-visit/patient-visit.component';
import { TodayAppointmentComponent } from './modules/today-appointment/today-appointment.component';
import { PatientdashboardComponent } from './modules/patientdashboard/patientdashboard.component';
import { NurseUserManagementComponent } from './modules/admin/nurse-user-management/nurse-user-management.component';
import { AppointmentComponent } from './modules/appointment/appointment.component';
import { SentComponent } from './modules/sentnotes/sentnotes.component';

const routes: Routes = [
  {   path : '' , component : HomescreenComponent  },
  
  {  path : 'admin' ,component : DefaultComponent, 
     children : [
    { path : 'patient-user' , component : PatientUserManagementComponent  },
    { path : 'physician-user', component : HospitalUserComponent },
    { path : 'nurse-user', component : NurseUserManagementComponent },
    { path : '' , component : DashboardComponent } 
  ] 
},

  {
    path: 'Nurse', component: NurselayoutComponent,
    children: [
      { path: '', component: TodayAppointmentComponent },
      {
        path: 'appointment', component: AppointmentComponent
      },

      {
        path: 'bookappoinemnt', component: AppointmentDeleteComponent
      },
      {
        path: 'sendnotes', component: SendnotesComponent
      },
      {
        path: 'recievenotes', component: RecieveNotesComponent
      },

      {
        path:'sentnotes', component:SentComponent
      },
      {
         path : 'myprofile' , component : NurseMyprofileComponent
      },
      {
        path : 'patientvisit' , component : PatientVisitComponent
     }
    ]
  },
  {
    path: 'physician', component: PhysicianlayoutComponent,
    children: [
      {
        path: '', component: TodayAppointmentComponent
      },
      {
        path: 'appointment', component: AppointmentComponent
      },
      {
        path: 'bookappoinemnt', component: AppointmentDeleteComponent
      },
      {
        path: 'views', component: ViewSechedulingComponent
      },
      {
         path : 'views' , component : ViewSechedulingComponent
       },
       {
          path : 'myprofile' , component : PhysicianMyprofileComponent
       },
       {
          path : 'patientvisit' , component : PatientVisitComponent
       },
       {
        path : 'sendnotes' , component : SendnotesComponent
     },
     {
        path : 'recievenotes' , component : RecieveNotesComponent
     },
    ]
  },
  {
    path: 'patient', component: PatientlayoutComponent,
    children: [
      {
        path: '', component: PatientdashboardComponent
      },
      {
        path: 'PatientSheduling', component: PatientUserShedulingComponent,

      },
      { path: 'PatientDetails', component: PatientDetailsComponent, },


    ]
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registeration', component: RegistrationComponent
  },
  {
    path: 'patientregistration', component: PatientRegistrationComponent
  },
 
  {
    path : 'bookappoinemnt' , component : AppointmentDeleteComponent
 },

{path:'change-password',  component:ChangePasswordComponent},

{path:'patient-medication-details',  component:PatientMedicationDetailsComponent},
{
  path : 'Physician' , component : PhysicianViewComponent
},
{
  path : 'adminpatientregister' , component : AdminpatientregistrationComponent
},
// {
//   path : 'admin' , component : AdminComponent,
//   children : [
//     {path : 'patient' , component : PatientUserManagementComponent},
//     {path : 'hospitalUser', component : HospitalUserComponent} 
//   ] 
// },
{
  path : 'patientvisit' , component : PatientVisitComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }