//import { Component, OnInit } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import{AllPatientListingService} from 'src/app/Service/all-patient-listing.service';
interface PatientUser {
  PatientId : string
  PatientName: string;
  Date: string;
  status: string;
}
PatientUser:[];
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

  constructor(private patientservice:AllPatientListingService){

  }

  ngOnInit(): void {
    this.GetAllPatientsList();
  }

  public listing : any[]=[];
  GetAllPatientsList() {
    debugger;
    this.patientservice.getPatientList().subscribe((data: any[]) => {
      console.log(data);
      this.listing=data;
    })
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
  this.userStatus = this.listing.find(x=>x.patientId==selectedPatientId);
  console.log(this.userStatus.status);

  if(this.userStatus.patientId == selectedPatientId)
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
  debugger;
  this.userStatus.status=data.status
  this.selectedPatient="";
  
  this.patientservice.updatepatientstatus(data.patientId,this.userStatus);

  console.log(this.userStatus)
  console.log("data"+ data.patientId)
}
cancleStatus(){
  this.selectedPatient="";

}
}


