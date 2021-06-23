import { Component, OnInit } from '@angular/core';
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
    FirstName :['',Validators.required ],
    LastName :['',Validators.minLength],
    DOB :[''],
    Age :[''],
    Gender:[''],
    Race:[''],
    Ethnicity:[''],
    Lanaguageknown :[''],
    Email :[''],
    HomeAddress :[''],
    ContantNo :['']
   });


}
