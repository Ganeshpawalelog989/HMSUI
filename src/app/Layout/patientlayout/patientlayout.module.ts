import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientlayoutComponent  } from 'src/app/Layout/patientlayout/patientlayout.component'
import { PatientsidebarComponent } from 'src/app/shared/components/patientsidebar/patientsidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
//import { PatientUserManagementComponent } from 'src/app/modules/admin/patient-user-management/patient-user-management.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { PatientdashboardComponent } from 'src/app/modules/patientdashboard/patientdashboard.component';

@NgModule({
  declarations: [
    PatientlayoutComponent,
    PatientsidebarComponent,
    //PatientUserManagementComponent
    PatientdashboardComponent,
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
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
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TimepickerModule,
     NgbModule,
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
    }),
    FlatpickrModule,
    NgbModalModule,
    
  ]
})
export class patientlayout { }
