import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MustMatch } from '../../registration/must-match.validator';
import { AddAppointmentComponent } from '../../scheduling/add-appointment/add-appointment.component';

@Component({
  selector: 'app-add-dialog-contant',
  templateUrl: './add-dialog-contant.component.html',
  styleUrls: ['./add-dialog-contant.component.scss']
})
export class AddDialogContantComponent implements OnInit {
  adduser: any;

  constructor(public dialog: MatDialog , private formBuilder : FormBuilder) { }

 
  ngOnInit(): void {
    this.adduser = this.formBuilder.group({

        Employeeid: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
        EmployeeName: ['', Validators.required],
        staus: ['', Validators.required],
        dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      });
  }
  

}





