import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicianlayoutComponent } from './physicianlayout.component';
import { PhisiciansidebarComponent } from 'src/app/shared/components/phisiciansidebar/phisiciansidebar.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule, MatNavList } from '@angular/material/list';
import { PhysicianMyprofileComponent } from 'src/app/modules/physician-myprofile/physician-myprofile.component';
import { PatientVisitComponent } from 'src/app/modules/patient-visit/patient-visit.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TodayAppointmentComponent } from 'src/app/modules/today-appointment/today-appointment.component';
//import { AppointmentComponent } from 'src/app/modules/appointment/appointment.component';
//import { AppointmentDeleteComponent } from 'src/app/modules/appointment-delete/appointment-delete.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    PhysicianlayoutComponent,
    PhisiciansidebarComponent,
  //  AppointmentComponent,
    //AppointmentDeleteComponent,
    PhysicianMyprofileComponent,
    PatientVisitComponent,
    TodayAppointmentComponent,
    
    
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    SharedModule,
    MatGridListModule,
    RouterModule,
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
    MatDividerModule,
    MatListModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TimepickerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
      }),
      FlatpickrModule,
      NgbModalModule
  ]
})
export class PhysicianlayoutModule { }