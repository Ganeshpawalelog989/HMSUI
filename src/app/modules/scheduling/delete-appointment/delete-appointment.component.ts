import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.scss']
})
export class DeleteAppointmentComponent implements OnInit {

  constructor(private fb : FormBuilder,private router : Router) { }
  deletescheduleForm : any; 

  ngOnInit(): void {
    this.deletescheduleForm = this.fb.group({

    });
  }

  DeleteAppointment()
  {

  }

  BackToScheduleform()
  {
    console.log("Back to Schedule form");
    this.router.navigate(['']);
  }

}
