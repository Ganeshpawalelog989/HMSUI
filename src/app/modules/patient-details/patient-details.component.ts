import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  
//   //Allergy Details
  Allery : FormGroup;
  allergyList :any;
  isallergy: boolean = false ; // hidden by default

  isReadonly = true;
  constructor(private formBuilder : FormBuilder, private router : Router, private fb:FormBuilder) { 
    // //Allergy Details
      this.allergyList = [];
      this.Allery = this.fb.group({
        allergyType: ['', Validators.required],
        allergyName: ['', Validators.required],
        isallergyfatal: ['', Validators.required],
      })

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
  this.allergyList.push(this.Allery.value);
  this.resetAllery();
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


  //Nevigate to Emergency Info Form
  onPatientSubmit() {
    //    localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/EmerencyInfo']);
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
  
      EmerencyInfo: FormGroup = this.formBuilder.group({
    FirstName :['',Validators.required ],
    LastName :['',Validators.minLength],
    Email :['',Validators.required],
    HomeAddress :['',Validators.required],
    ContantNo :['',Validators.required],
    Relation :['',Validators.required]
   });


}
