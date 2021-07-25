import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { PatientDetails } from 'src/app/Model/patientdetails';
import { AuthenticationService } from 'src/app/Service/AuthService';
import {PatientdetailsService} from 'src/app/Service/patientdetails.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  
//   //Allergy Details
  Allery : FormGroup;
  allergyList :any;
  isallergy: boolean = true; // hidden by default
  patient_Details: PatientDetails;
  
  patientDetails: FormGroup;
  EmerencyInfo : FormGroup;
  
  //-----------------------------------------
  isReadonly = true;
  constructor(private formBuilder : FormBuilder, private router : Router, private fb:FormBuilder, 
    private patientService: PatientdetailsService, private userServ: AuthenticationService) { 
    // //Allergy Details
      this.allergyList = [];
      this.Allery = this.fb.group({
        allergyType: ['', Validators.required],
        allergyName: ['', Validators.required],
        isallergyfatal: ['', Validators.required],
      })


  }
  public pId:string;
  ngOnInit(): void {
    debugger;
    var patientuser= localStorage.getItem('currentUser');
    var user = JSON.parse(patientuser);
    this.pId = user.userId; 
    console.log(this.pId);
   this.getPatientdetails();


   this.patientDetails = this.formBuilder.group({
    FirstName :['',Validators.required,Validators.minLength(2) ],
    LastName :['',Validators.minLength , Validators.minLength(2)],
    DOB :['',Validators.required ],
    Age :['',Validators.required],
    Gender:['',Validators.required],
    Race:['',Validators.required],
    Ethnicity:['',Validators.required],
    LanguageKnown :['',Validators.required],
    Email :['',Validators.required],
    HomeAddress :['',Validators.required],
    ContantNo :['',Validators.required],
    title :['']
   });
  this.EmerencyInfo = this.formBuilder.group({
    FirstName :['',Validators.required,Validators.minLength(2) ],
    LastName :['',Validators.minLength , Validators.minLength(2)],
    Realtion: ['',Validators.required ],
    EmailAddress: ['',Validators.required ],
    ContactNo: ['',Validators.required ],
    HomeAddress: ['',Validators.required ],

  })
     

  }
 
  getPatientdetails(){
    debugger;
    this.patientService.getPatientDetailById(this.pId).subscribe(data1=>{  
      debugger;
      console.log(data1);
      this.patient_Details = data1;
    },
    error=>{
      this.router.navigate(['patient'])
      console.log(error);
    })
  }
  currentValue(e:any){
    console.log(e);
  }

  genders = [
    "Male",
    "Female",
    "Other"
  ];

  Relation =[
    "Father",
    "Mother",
    "Other"
  ];

   option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

  alergy=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];

  onSubmitUserDetails(value: any){
    console.log(value);
  }
  
  //Patient Details for adding tables
 // public addItem() : void 
 // {
 //   this.listData.push(this.patientvisit.value);
 // }
 // togglePatient() {

 //   this.ispatient = ! this.ispatient; 
 //   }
 //   resetPatientDetails()
 //   {
 //     this.patientvisit.reset();
 //   }


// Allergy Details
addAllergy(){
  debugger;
  var a= this.allergyList.push(this.Allery.value);
  //console.log(a);
  //this.isallergy= !this.isallergy;
  //this.toggleAllergy();
  this.Allery.reset();
  //this.resetAllery();
  
  }
toggleAllergy() {
  this.isallergy = ! this.isallergy;
  }
  resetAllery(){
    this.Allery.reset();
  }
  removeAllergy(element:any){
    this.allergyList.forEach((value: any, index:any)=>{
      if(value == element)
      this.allergyList.splice(index,1)
    });
  }

    toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    }
    toggleDiable() {
      this.isReadonly = true;
    }

   myControl = new FormControl();
   options: string[] = ['Ayahuasca', 'Cocaine', 'Hallucinogens'];
   filteredOptions: Observable<string[]> | undefined;

   savePatient() {
     debugger;
    this.userServ.register(this.patientDetails.value)
    .subscribe(data=>{
      debugger;
      console.log(data);
     // this.router.navigate(['/login']);
    },
    error=>{
     // this.router.navigate(['/register'])
      console.log(error);
    })
  }
   

}
