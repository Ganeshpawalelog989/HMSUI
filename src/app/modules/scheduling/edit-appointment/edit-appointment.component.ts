import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss']
})
export class EditAppointmentComponent implements OnInit {

  constructor(private fb : FormBuilder,private router : Router) { }

  ngOnInit(): void {
  }

  EditAppointment()
  {
    console.log("Hello Edit");
  }
  EditscheduleForm : FormGroup = this.fb.group({
    PhysicianName : ['',Validators.required],
    PhysianEmpId :['',Validators.required] ,
    availableSlot :['',Validators.required],
    description :['',Validators.required],
     

  });

  BackToScheduleform()
  {
    console.log("Back to Schedule form");
    this.router.navigate(['']);
  }
}

