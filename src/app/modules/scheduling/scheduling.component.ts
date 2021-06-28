import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Physician} from 'src/app/Model/Patient';
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  constructor(private fb : FormBuilder,private router : Router) { }

 // flag : boolean = true;
  scheduleForm : any;


  ngOnInit(): void {
    this.scheduleForm  = this.fb.group({
      PhysicianName : ['', Validators.required,Validators.minLength(3),Validators.maxLength(15)],
      PhysianEmpId : ['', Validators.required],
      availabledateSlot : ['', Validators.required],
      availableTimeSlot : ['',Validators.required]
    });
  
  }

  arrayPhysician : Physician[] = [
    {value : 0, viewValue : "Meharsh"},
    {value : 1, viewValue : "Santosh"},
    {value : 2, viewValue : "Amol"},
    {value : 3, viewValue : "Anand"},
    {value : 4, viewValue : "Sachin"},
    {value : 5, viewValue : "Ganesh"}
  ]

  openAddAppointment()
  {
  //  this.flag;
    console.log("Appointment Page Open");
    this.router.navigate(['addappointment'])

  }
  openEditAppointment()
  {
    console.log("Appointment fixed");
    this.router.navigate(['edit-appointment'])
  }
  openDeleteAppointment()
  {
    console.log("Appointment fixed");
    this.router.navigate(['delete-appointment'])
  }
}

