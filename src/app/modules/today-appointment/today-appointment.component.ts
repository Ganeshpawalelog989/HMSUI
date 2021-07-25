import { Component, OnInit } from '@angular/core';
import { PatientvisitService } from 'src/app/Service/patientvisit.service';

interface PatientUser {
  PatientId : string
  PatientName: string;
  Date: string;
  status: string;
}

const user: PatientUser[] = [
  {
    PatientId : "1",
    PatientName: 'Sachin',
    Date: '02/03/2021',
    status: "Nurse Process",
  },
  {
    PatientId : "2",
    PatientName: 'Meharsh',
    Date: '02/03/2021',
    status: "Nurse Process",
  },
  {
    PatientId : "3",
    PatientName: 'Anand',
    Date: '02/03/2021',
    status: "Nurse Process",
  },
  {
    PatientId : "4",
    PatientName: 'Santosh',
    Date: '02/03/2021',
    status: "Nurse Process",
  }
];



@Component({
  selector: 'app-today-appointment',
  templateUrl: './today-appointment.component.html',
  styleUrls: ['./today-appointment.component.scss']
})
export class TodayAppointmentComponent implements OnInit {

  constructor(private servivcePat : PatientvisitService) {
    

  }

  ngOnInit(): void {
    debugger;
    this.servivcePat.getPatientVisitList()
    .subscribe(data=>{
      console.log(data);
      this.users =data;
    })   
  }
  

  /**
   *
   */
  
  public searchText : any = "";
  isPrint: boolean = true;

  myFlagForSlideToggle: boolean = true;
   
 // disabled : boolean
 ObjPatient : any;
 btnValue1 : string = "";
 
  isChecked = true;

  public selectedPatient : string = "";
  users : any[]=[];
  userStatus : any;


Patient : any

showDetailsForm(Id: string)
{
  this.ObjPatient = this.servivcePat.getPatientVisitById(Id)
  .subscribe(data=>{
    console.log(data);
  })
}

}
