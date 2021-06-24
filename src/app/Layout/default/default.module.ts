import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav' 
//import { PatientDetailsComponent } from './modules/patient-details/patient-details.component';
import { PatientDetailsComponent } from 'src/app/modules/patient-details/patient-details.component'
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {EmerencyInfoComponent } from 'src/app/modules/emerency-info/emerency-info.component'

import{ForgotPasswordComponent} from 'src/app/modules/forgot-password/forgot-password.component';
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
//import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { VisitDetailsComponent } from 'src/app/modules/visit-details/visit-details.component';
import { DiagnosisComponent } from 'src/app/modules/diagnosis/diagnosis.component';
import { ProcedureComponent } from 'src/app/modules/procedure/procedure.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PatientDetailsComponent,
    EmerencyInfoComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PatientMedicationDetailsComponent,
    VisitDetailsComponent,
    DiagnosisComponent,
    ProcedureComponent
    
  ],
  imports: [
    CommonModule,
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
//     MatDividerModule,
    // FlexLayoutModule,
    // MatCardModule,
    // MatPaginatorModule,
    // MatTableModule
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
    MatRadioModule
  ]
})
export class DefaultModule { }
