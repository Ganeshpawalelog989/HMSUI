import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './Layout/default/default.module';
import { HomescreenModule } from './homescreen/homescreen/homescreen/homescreen.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NurselayoutModule } from './Layout/nurselayout/nurselayout.module';
import { PhysicianlayoutModule } from './Layout/physicianlayout/physicianlayout.module';
import { PatientlayoutModule } from './Layout/patientlayout/patientlayout.module';

@NgModule({
  declarations: [
    AppComponent,
   
    
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
