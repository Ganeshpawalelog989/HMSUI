
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientdetailsService } from 'src/app/Service/patientdetails.service';


@Component({
  selector: 'app-patientsidebar',
  templateUrl: './patientsidebar.component.html',
  styleUrls: ['./patientsidebar.component.scss']
})
export class PatientsidebarComponent implements OnInit {

  constructor(private router : Router, private patientService: PatientdetailsService  ) { }

  public data: string;
  ngOnInit(): void {
   
    // debugger;
    // var patientuser= localStorage.getItem('currentUser');
    // var user = JSON.parse(patientuser);
    // this.data = user.userId; 
    // console.log(this.data);
  }
 
  // getPatientdetails(){
  //   //this.router.navigate(['PatientDetails']);
  //   this.patientService.getPatientDetailById(this.data).subscribe(data1=>{  
  //     console.log(data1);
  //   },
  //   error=>{
  //     this.router.navigate(['patient'])
  //     console.log(error);
  //   })
  // }


  patientVisit()
  {
    this.router.navigate(['/PatientDetails']);
  }

}
