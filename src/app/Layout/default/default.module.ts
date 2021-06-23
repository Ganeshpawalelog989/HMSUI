import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav' ;
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

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PatientMedicationDetailsComponent
    
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
    MatAutocompleteModule
//     MatDividerModule,
    // FlexLayoutModule,
    // MatCardModule,
    // MatPaginatorModule,
    // MatTableModule
  ]
})
export class DefaultModule { }
