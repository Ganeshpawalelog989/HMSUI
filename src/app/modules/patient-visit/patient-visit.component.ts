import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.scss']
})
export class PatientVisitComponent implements OnInit {

//   //Allergy Details
Allery : FormGroup;
allergyList :any;
isallergy: boolean = false ; // hidden by default

//   //Diagnosis Details
  diagnosisdetails: FormGroup;
  diagnosisList : any;
  isdiagnosis: boolean = false;

// //Procedure Details
  proceduredetails : FormGroup;
  procedureList : any;
  isprocedure: boolean = false;

//   //Medication Details
  patientmedForm : FormGroup;
  medicationList: any;
  ismedication: boolean = false;




isReadonly = true;
constructor(private formBuilder : FormBuilder, private router : Router, private fb:FormBuilder) { 
  // //Allergy Details
    this.allergyList = [];
    this.Allery = this.fb.group({
      allergyType: ['', Validators.required],
      allergyName: ['', Validators.required],
      isallergyfatal: ['', Validators.required],
    })

      //Diagnosis Details
      this.diagnosisList = [];
      this.diagnosisdetails = this.fb.group({
        diagnosisCode: ['', Validators.required],
        diagnosisDescription: ['', Validators.required],
        diagnosisIsDepricated: ['', Validators.required],
      })
      //Procedure Details
      this.procedureList = [];
      this.proceduredetails = this.fb.group({
        procedureCode: ['', Validators.required],
        procedureDescription: ['', Validators.required],
        procedureIsDepricated: ['', Validators.required],
      })

      // Medication Details 
    this.medicationList = [];
    this.patientmedForm = this.fb.group({
      drugId: ['', Validators.required],
      drugGenericName: ['', Validators.required],
      drugBrandedName: ['', Validators.required],
      drugForm: ['', Validators.required],
    })

    

}
//Diagnosis Details
addDiagnosis(){
  debugger;
  this.diagnosisList.push(this.diagnosisdetails.value); 
  this.resetDiagnosis();
}
toggleDiagnosis() {
  this.isdiagnosis = ! this.isdiagnosis; 
  }
  resetDiagnosis(){
    this.diagnosisdetails.reset();
  }
  removeDiagnosis(element:any){
    this.diagnosisList.forEach((value: any, index:any)=>{
      if(value == element)
      this.diagnosisList.splice(index,1)
    });
  }


//Procedure Detials
addProcedure(){
  debugger;
  this.procedureList.push(this.proceduredetails.value);
  this.resetProcedure();
}
toggleProcedure() {
  this.isprocedure = ! this.isprocedure;
  }       
  resetProcedure(){
    this.proceduredetails.reset();
  }       
  removeProcedure(element:any){
    this.procedureList.forEach((value: any, index:any)=>{
      if(value == element)
      this.procedureList.splice(index,1)
    });
  }

//-----Medication Details
addMedication(){
  debugger;
  this.medicationList.push(this.patientmedForm.value);
  this.resetMedication();
}
toggleMedication(){
  this.ismedication = ! this.ismedication;
}
resetMedication(){
  this.patientmedForm.reset();
}

removeMedication(element:any){
    this.medicationList.forEach((value: any, index:any)=>{
      if(value == element)
      this.medicationList.splice(index,1)
    });
  }




ngOnInit(): void {
  
  this.filteredOptions = this.myControl.valueChanges
  .pipe(
    startWith(''),
    map(value => this._filter(value))
  );
  
}
private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
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

//  patientmedForm: FormGroup = this.fb.group({
//   DrugId: ['', [Validators.required]],
//   DrugName: ['', [Validators.required]],
//   DrugGenericName: ['', [Validators.required]],
//   DrugBrandedName: ['', [Validators.required]],
//   DrugForm: ['', [Validators.required]]
// })


 //Procedure Details code
 Code=[
  "101",
  "102",
  "103",
  "104",
  "105",
  "105",
 ]
 
 Description=[
  "food",
  "Fungi",
  "Drug",
  "Plant",
  "Venom or Salivary",
  "Other",
 ]
 
//  proceduredetails: FormGroup = this.formBuilder.group({​​​
//   Code :['',Validators.required ],
//   Description :['',Validators.minLength]
//     })

//   diagnosisdetails: FormGroup = this.formBuilder.group({​​​
//     Code :['',Validators.required ],
//     Description :['',Validators.minLength]
//    })


}
