import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './Layout/default/default.module';
import { HomescreenModule } from './homescreen/homescreen/homescreen/homescreen.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientlayoutModule } from './Layout/patientlayout/patientlayout.module';
import { NurselayoutModule } from './Layout/nurselayout/nurselayout.module';
import { PhysicianlayoutModule } from './Layout/physicianlayout/physicianlayout.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    PatientlayoutModule,
    HomescreenModule,
    NgbModule,
    NurselayoutModule,
    PhysicianlayoutModule,
    NgbModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
