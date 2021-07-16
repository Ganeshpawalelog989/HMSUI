//import { Component, OnInit } from '@angular/core';
import {Component, OnInit} from '@angular/core';

interface PatientUser {
  PatientId : string
  PatientName: string;
  Date: string;
  status: string;
}

const user: PatientUser[] = [
  {
    PatientId : "1",
    PatientName: 'Russia',
    Date: '02/03/2021',
    status: "Active",
  },
  {
    PatientId : "2",
    PatientName: 'Canada',
    Date: '02/03/2021',
    status: "InActive",
  },
  {
    PatientId : "3",
    PatientName: 'United States',
    Date: '02/03/2021',
    status: "Active",
  },
  {
    PatientId : "4",
    PatientName: 'China',
    Date: '02/03/2021',
    status: "Blocked",
  }
];



@Component({
  selector: 'app-patient-user-management',
  templateUrl: './patient-user-management.component.html',
  styleUrls: ['./patient-user-management.component.scss']
})
 export class PatientUserManagementComponent implements OnInit {

  ngOnInit(): void {
    
  }
  public searchText : any = "";
  isPrint: boolean = true;

  myFlagForSlideToggle: boolean = true;
   
 // disabled : boolean
 btnValue : string = "";
 btnValue1 : string = "";
 
  isChecked = true;

  public selectedPatient : string = "";
  users = user;
  userStatus : any;

show(selectedPatientId : any)
{
  debugger;
	this.selectedPatient  = selectedPatientId 
  this.userStatus = this.users.find(x=>x.PatientId==selectedPatientId);
  console.log(this.userStatus.status);

  if(this.userStatus.PatientId == selectedPatientId)
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
  
  this.userStatus=data
  this.selectedPatient="";
  
  console.log(this.userStatus)
}
cancleStatus(){
  this.selectedPatient="";

}
}


