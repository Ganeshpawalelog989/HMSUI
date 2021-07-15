import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminpatientregistrationComponent } from '../../adminpatientregistration/adminpatientregistration.component';
import { PatientRegistrationComponent } from '../../patient-registration/patient-registration.component';
import { RegistrationComponent } from '../../registration/registration.component';
//import { AddDialogContantComponent } from '../add-dialog-contant/add-dialog-contant.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'Add Patient User', cols: 2, rows: 2, color: 'lightblue'},
    {text : 'Add Hospital User', cols: 2, rows: 2, color: 'lightgreen'}
  ]
  tiles1: Tile[] = [
  
  ]    
   td : any;
  openDialog() {
    //const dialogRef = this.dialog.open(AddAppointmentComponent);
    debugger;
     this.td =this.tiles.find(x=>x.text);
    console.log(this.td);
    if(this.td.text=="Add Patient User"){

    const dialogRef = this.dialog.open(AdminpatientregistrationComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    }
    if(this.td.text=="Add Hospital User"){
    const dialogRef1 = this.dialog.open(RegistrationComponent);
    dialogRef1.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
     dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    }
  
  }

  


}

