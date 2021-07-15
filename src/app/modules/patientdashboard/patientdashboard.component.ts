import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;

}


@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.scss']
})
export class PatientdashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'Todays Appointment', cols: 2, rows: 2, color: 'lightblue'},
    {text : 'Create New Appointment', cols: 2, rows: 2, color: 'lightgreen'}
  ]
  tiles1: Tile[] = [
  
  ]    
   td : any;
  


}
