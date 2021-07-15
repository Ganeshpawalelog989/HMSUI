import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {HospitalUser} from '../hospital-user/hospital-user.component'

@Component({
  selector: 'app-add-dialog-contant',
  templateUrl: './add-dialog-contant.component.html',
  styleUrls: ['./add-dialog-contant.component.scss']
})
export class AddDialogContantComponent implements OnInit {
  adduser: any;
  
  constructor(public dialog: MatDialog , 
    private formBuilder : FormBuilder,
    public dialogRef: MatDialogRef<AddDialogContantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HospitalUser) { }


 
  ngOnInit(): void {
    this.adduser = this.formBuilder.group({

      EmployeeId: ['', Validators.required],
      EmployeeName: ['', Validators.required],
      DateOfJoining: ['', Validators.required ],
      status: ['', Validators.required],
        
      });
  }
  saveDialogData(){
    
    this.data=this.adduser.value
    console.log(this.data)
    console.log(this.adduser.value) 
  }
  closeDialog()
  {
    this.dialogRef.close();
  }
  

}





