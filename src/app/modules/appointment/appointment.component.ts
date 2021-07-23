import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/Model/Appointment';
import {AppiontmentservServiceService } from 'src/app/Service/appiontmentserv-service.service'
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  constructor(private appointserv : AppiontmentservServiceService ,
    private fb : FormBuilder) { }
  appointment : any;
  // physicianName : string ='';

  ngOnInit(): void {
    this.getPhysiciansName();
    this.appointment = this.fb.group({
      physicianName : ['',Validators.required],
      physicianId : ['']
    })
  }
 // pname : any[] =[];
  
  physicians : Appointment[] = [
    {
      "physicianId" : "1",
      "physicianName" : "Meharsh"
    },
    {
      "physicianId" : "2",
      "physicianName" : "Santosh"
    },
    {
      "physicianId" : "3",
      "physicianName" : "Anand"
    },
    {
      "physicianId" : "4",
      "physicianName" : "Ganesh"
    },
    {
      "physicianId" : "5",
      "physicianName" : "Sachin"
    }
  ]
  movies = [
    { title: 'The Shawshank Redemption (1994)' },
    { title: 'The Godfather (1972)' },
    { title: 'The Godfather: Part II (1974)' },
    { title: 'The Dark Knight (2008)' },
    { title: '12 Angry Men (1957)' },
    { title: 'Schindler\'s List (1993)' },
    { title: 'The Lord of the Rings: The Return of the King (2003)' },
    { title: 'Pulp Fiction (1994)' }
];

currentDate = new Date();
 
  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    ])
  });

  getPhysiciansName()
  {
    this.appointserv.getAllPhsicianName()
    .subscribe(data => {
      console.log(data);
     // this.pname = data;
    })
  }

}
