import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav' 
import { PatientDetailsComponent } from 'src/app/modules/patient-details/patient-details.component'
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {EmerencyInfoComponent } from 'src/app/modules/emerency-info/emerency-info.component'
import {ForgotPasswordComponent} from 'src/app/modules/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from 'src/app/modules/change-password/change-password.component';
import { PatientMedicationDetailsComponent } from 'src/app/modules/patient-medication-details/patient-medication-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { VisitDetailsComponent } from 'src/app/modules/visit-details/visit-details.component';
import { DiagnosisComponent } from 'src/app/modules/diagnosis/diagnosis.component';
import { ProcedureComponent } from 'src/app/modules/procedure/procedure.component';
import{MatGridListModule} from '@angular/material/grid-list'

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from 'src/app/modules/registration/registration.component';
import { SchedulingComponent } from 'src/app/modules/scheduling/scheduling.component';
import { AddAppointmentComponent } from 'src/app/modules/scheduling/add-appointment/add-appointment.component';
import { DeleteAppointmentComponent } from 'src/app/modules/scheduling/delete-appointment/delete-appointment.component';
import { EditAppointmentComponent } from 'src/app/modules/scheduling/edit-appointment/edit-appointment.component';
import { PhysicianViewComponent } from 'src/app/modules/physician-view/physician-view.component';
import { SendnotesComponent } from 'src/app/modules/sendnotes/sendnotes.component';
import { RecieveNotesComponent } from 'src/app/modules/recieve-notes/recieve-notes.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { PatientUserManagementComponent } from 'src/app/modules/admin/patient-user-management/patient-user-management.component';

import {MatTableModule} from '@angular/material/table';
import { HospitalUserComponent } from 'src/app/modules/admin/hospital-user/hospital-user.component';
import { AlleryComponent } from 'src/app/modules/allery/allery.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddDialogContantComponent } from 'src/app/modules/admin/add-dialog-contant/add-dialog-contant.component';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { PatientRegistrationComponent } from 'src/app/modules/patient-registration/patient-registration.component';

import {  MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule  } from '@angular/flex-layout'
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    DefaultComponent,
    VisitDetailsComponent,
    DiagnosisComponent,
    ProcedureComponent,
    DashboardComponent,
    PatientDetailsComponent,
    EmerencyInfoComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PatientMedicationDetailsComponent,
    RegistrationComponent,
    SchedulingComponent,
    AddAppointmentComponent,
    DeleteAppointmentComponent,
    EditAppointmentComponent,
    PhysicianViewComponent,
    SendnotesComponent,
    RecieveNotesComponent,
    AdminComponent,
    PatientUserManagementComponent,
    HospitalUserComponent,
    AlleryComponent,
    AddDialogContantComponent,
    FilterPipe,
    PatientRegistrationComponent,
   
  ],
  imports: [
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    CommonModule,
    MatGridListModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule, 
    MatRadioModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule ,
    MatTableModule ,
    MatSlideToggleModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
  ]
})
export class DefaultModule { }
