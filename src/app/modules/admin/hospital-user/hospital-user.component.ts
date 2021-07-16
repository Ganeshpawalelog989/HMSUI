import { Component, OnInit } from '@angular/core';
import { AddDialogContantComponent } from '../add-dialog-contant/add-dialog-contant.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HospitalUser } from 'src/app/Model/Admin';



// export interface HospitalUser {
//   EmployeeId : string
//   EmployeeName: string;
//   DateOfJoining: string;
//   status: string;
// }
const user: HospitalUser[] = [
  {
    EmployeeId : "1",
    EmployeeName: 'Sachin',
    DateOfJoining: '02/03/2021',
    status: "Active",
  },
  {
    EmployeeId : "2",
    EmployeeName : 'Rahul',
    DateOfJoining: '02/03/2021',
    status: "InActive",
  },
  {
    EmployeeId : "3",
    EmployeeName: 'Tushar',
    DateOfJoining: '02/03/2021',
    status: "Active",
  },
  {
    EmployeeId : "4",
    EmployeeName: 'Meharsh',
    DateOfJoining: '02/03/2021',
    status: "Blocked",
  }
];



@Component({
  selector: 'app-hospital-user',
  templateUrl: './hospital-user.component.html',
  styleUrls: ['./hospital-user.component.scss']
})




export class HospitalUserComponent implements OnInit {

  public searchText : any = "";

  isPrint: boolean = true;

  myFlagForSlideToggle: boolean = true;
   
 // disabled : boolean
 
  isChecked = true;

  

  
  constructor(public dialog: MatDialog) { }

  // openDialog() {
  //   const dialogRef = this.dialog.open();

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
//  }
  openDialog() {
  //const dialogRef = this.dialog.open(AddAppointmentComponent);
  const dialogRef = this.dialog.open(AddDialogContantComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //this.animal = result;
  });

}


  ngOnInit(): void {
  }
  public selectedEmployee : string = "";
  users = user;
  userStatus : any;

  btnValue : string = "";
  btnValue1 : string = "";
 
show(selectedEmployeeId : any)
{
  debugger;
	this.selectedEmployee  = selectedEmployeeId
  this.userStatus = this.users.find(x=>x.EmployeeId==selectedEmployeeId);
  console.log(this.userStatus.status);

  if(this.userStatus.EmployeeId == selectedEmployeeId)
  {
    if(this.userStatus.status =="Active")
    {
	    this.btnValue = "InActive"
	    this.btnValue1 = "Blocked"

    }
    if(this.userStatus.status =="InActive")
    {
	    this.btnValue = "Active"
      this.btnValue1 = "Blocked"
    }
    if(this.userStatus.status =="Blocked")
    {
	    this.btnValue = "Active"
      this.btnValue1 = "InActive"
    }
  }
}
Patient : any
getCurrentStatus(e:any)
{
  debugger;
	console.log(e);
	if(this.userStatus.status =="Active")
	{
    
		this.userStatus.status = e;		
	}
	if(this.userStatus.status =="InActive")
	{
		this.userStatus.status = e;		
	}
	if(this.userStatus.status =="Blocked")
	{
		this.userStatus.status = e;		
	}
}
saveStatus(data : any ){
  //this.getCurrentStatus(data)
  this.selectedEmployee=""; 
  
  this.userStatus=data;
  
  console.log(this.userStatus)
}
cancleStatus(){
  this.selectedEmployee="";
}

}
