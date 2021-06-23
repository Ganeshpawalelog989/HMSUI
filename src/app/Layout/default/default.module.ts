import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav' 
//import { PatientDetailsComponent } from './modules/patient-details/patient-details.component';
import { PatientDetailsComponent } from 'src/app/modules/patient-details/patient-details.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {EmerencyInfoComponent } from 'src/app/modules/emerency-info/emerency-info.component'
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PatientDetailsComponent,
    EmerencyInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
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
