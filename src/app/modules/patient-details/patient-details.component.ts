import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private router : Router) { }
  onSubmit() {
//    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/EmerencyInfo']);
}

  ngOnInit(): void {
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
  
   patientDetails: FormGroup = this.formBuilder.group({
    FirstName :['',Validators.required,Validators.minLength(2) ],
    LastName :['',Validators.minLength , Validators.minLength(2)],
    DOB :['',Validators.required ],
    Age :['',Validators.required],
    Gender:['',Validators.required],
    Race:['',Validators.required],
    Ethnicity:['',Validators.required],
    Lanaguageknown :['',Validators.required],
    Email :['',Validators.required],
    HomeAddress :['',Validators.required],
    ContantNo :['',Validators.required]
   });


}
