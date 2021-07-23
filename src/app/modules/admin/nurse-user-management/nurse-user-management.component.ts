import { Component, OnInit } from '@angular/core';
import{AllPatientListingService} from 'src/app/Service/all-patient-listing.service';

interface NurseUser {
  NurseId : string
  NurseName: string;
  Date: string;
  status: string;
}
NurseUser:[];
const user: NurseUser[] = [
  {
    NurseId : "1",
    NurseName: 'Russia',
    Date: '02/03/2021',
    status: "Active",
  },
  {
    NurseId : "2",
    NurseName: 'Canada',
    Date: '02/03/2021',
    status: "InActive",
  },
  {
    NurseId : "3",
    NurseName: 'United States',
    Date: '02/03/2021',
    status: "Active",
  },
  {
    NurseId : "4",
    NurseName: 'China',
    Date: '02/03/2021',
    status: "Blocked",
  }
];


@Component({
  selector: 'app-nurse-user-management',
  templateUrl: './nurse-user-management.component.html',
  styleUrls: ['./nurse-user-management.component.scss']
})
export class NurseUserManagementComponent implements OnInit {

  constructor(private nurseservice:AllPatientListingService) { }

  ngOnInit(): void {
    this.GetAllNurseList();
  }

  public listing : any[]=[];
  GetAllNurseList() {
    debugger;
    this.nurseservice.getNurseList().subscribe((data: any[]) => {
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
    this.userStatus = this.listing.find(x=>x.nurseId==selectedPatientId);
    console.log(this.userStatus.status);
  
    if(this.userStatus.nurseId == selectedPatientId)
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
  
  this.nurseservice.updatepatientstatus(data.patientId,this.userStatus);

  console.log(this.userStatus)
  console.log("data"+ data.patientId)
}
cancleStatus(){
  this.selectedPatient="";

}


}
