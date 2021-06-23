import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmerencyInfoComponent } from './modules/emerency-info/emerency-info.component';
import { PatientDetailsComponent } from './modules/patient-details/patient-details.component';

const routes: Routes = [
  {path : '' , 
  component : DefaultComponent, 
  children : [
  { path : '' , 
  component : DashboardComponent ,
  },
  {path : 'PatientDetails' , component : PatientDetailsComponent},
  {path : ' EmerencyInfo' , component : EmerencyInfoComponent}
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
