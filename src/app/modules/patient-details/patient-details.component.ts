import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientDetails } from 'src/app/Model/PatientDetails';



@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})

export class PatientDetailsComponent implements OnInit {
public birthdate: any;
public age!: number ;
public CalculateAge(): void {
  if (this.birthdate) {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

//patient deatils 
 
  //Allergy Details
  Allery : FormGroup;
  allergyList :any =[];
  isallergy: boolean = true ; // hidden by default
  isReadonly = true;
  constructor(private formBuilder : FormBuilder, private router : Router, private fb:FormBuilder ) { 
   // //Allergy Details
      //this.//allergyList = [];
         this.Allery = this.fb.group({
        allergyType: [''],
        allergyName: [''],
        allergyIsFatal: [''],
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
 public addItem()  
 {
   //this.listData.push(this.patientvisit.value);
  }
 

// Allergy Details

addAllergy(){
  debugger;
  this.allergyList.push(this.Allery.value);
  //this.resetAllery();
     this.Allery.reset();
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
  currentValue(e:any){​​​​​​​​
  console.log(e);
  }​​​​​​​​
  
  toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    }
    toggleDiable() {
      this.isReadonly = true;
    }
 // myControl
   PatientDetails = new FormControl();
   options: string[] = ['Ayahuasca', 'Cocaine', 'Hallucinogens'];
   filteredOptions: Observable<string[]> | undefined;
   patientDetails: FormGroup = this.formBuilder.group({
   FirstName :['',[Validators.required, Validators.pattern('[a-zA-Z]*') ]],
   LastName :['',[Validators.minLength , Validators.minLength(2)]],
   DOB :['',[Validators.required ]],
   Age :['',[Validators.required]],
   Gender:['',[Validators.required]],
   Race:['',[Validators.required]],
   Ethnicity:['',[Validators.required]],
   Lanaguageknown :['',[Validators.required]],
   Email :['',[Validators.required]],
   HomeAddress :['',[Validators.required, Validators.maxLength(50)]] ,
   ContantNo :['',[Validators.required , Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]]
    });
  
    EmerencyInfo: FormGroup = this.formBuilder.group({
    FirstName :['',[Validators.required , Validators.pattern('[a-zA-Z]*')] ],
    LastName :['',[Validators.minLength]],
    Email :['',[Validators.required]],
    HomeAddress :['',[Validators.required]],
    ContantNo :['',[Validators.required , Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
    Relation :['',[Validators.required]]
   });
}


