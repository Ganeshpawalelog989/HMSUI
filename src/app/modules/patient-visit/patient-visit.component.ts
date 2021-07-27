import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { patientDetails } from 'src/app/Model/Patient';
import { PatientDetails } from 'src/app/Model/patientdetails';
import { AuthenticationService } from 'src/app/Service/AuthService';
import { PatientdetailsService } from 'src/app/Service/patientdetails.service';
import { PatientvisitService } from 'src/app/Service/patientvisit.service';
@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.scss']
})
export class PatientVisitComponent implements OnInit {

//   //Allergy Details
Allery : FormGroup;
allergyList :any = [];
isallergy: boolean = true; // hidden by default

patient_Details : PatientDetails;
isOpen: boolean = true;

patientDetails: FormGroup;
EmerencyInfo: FormGroup;

//   //Diagnosis Details
  diagnosisdetails: FormGroup;
  diagnosisList : any = [];
  isdiagnosis: boolean = true;

// //Procedure Details
  proceduredetails : FormGroup;
  procedureList : any= [];
  isprocedure: boolean = true;

//   //Medication Details
  patientmedForm : FormGroup;
  medicationList: any = [];
  ismedication: boolean = true;






isReadonly = true;
constructor(private formBuilder : FormBuilder, private router : Router, private fb:FormBuilder,
  private getpatient:PatientvisitService,
    private patientService: PatientdetailsService,
    private userServ: AuthenticationService) { 

    this.patientDetails = this.fb.group({
       Id : ['', ],
       PatientId : [''],
       Fname : [''],
       Lname : [''],
       Dob : [''],
       Age : [''],
       Gender: [''],
       Race: [''],
       Ethnicity: [''],
       LanguageKnown: [''],
       Email: [''],
       HomeAddress: [''],
       ContactNumber: [''],
       EmergencyFname: [''],
       EmergencyLname: [''],
       Relationship: [''],
       EmergencyEmail: [''],
       EmergencyAddress: [''],
       EmergencyMobileNo: [''],
       AccessFlag: [''],
       TypeOfAllergy: [''],
       IsAllergyFatal: [''],
       RegistrationDate : [''],
       Ssn : [''],
       Title : ['']

    })
  // //Allergy Details
   // this.allergyList = [];
    this.Allery = this.fb.group({
      allergyType: ['', Validators.required],
      allergyName: ['', Validators.required],
      //isallergyfatal: ['', Validators.required],
    })

      //Diagnosis Details
     // this.diagnosisList = [];
      this.diagnosisdetails = this.fb.group({
        diagnosisCode: ['', Validators.required],
        diagnosisDescription: ['', Validators.required],
        diagnosisIsDepricated: [''],
      })
      //Procedure Details
     // this.procedureList = [];
      this.proceduredetails = this.fb.group({
        procedureCode: ['', Validators.required],
        procedureDescription: ['', Validators.required],
        //procedureIsDepricated: ['', Validators.required],
      })

      // Medication Details 
   // this.medicationList = [];
    this.patientmedForm = this.fb.group({
      drugId: ['', Validators.required],
      drugName: ['', Validators.required],
      drugGenericName: ['', Validators.required],
      drugBrandName: ['', Validators.required],
      drugForm: ['', Validators.required],
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
  Lanaguageknown :['',Validators.required],
  Email :['',Validators.required],
  HomeAddress :['',Validators.required],
  ContantNo :['',Validators.required]
 });

   this.EmerencyInfo = this.formBuilder.group({
  FirstName :['',Validators.required ],
  LastName :['',Validators.minLength],
  Email :['',Validators.required],
  HomeAddress :['',Validators.required],
  ContantNo :['',Validators.required],
  Relation :['',Validators.required]
 });

  
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


alergy=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];



toggleDiagnosis() {
  this.isdiagnosis = ! this.isdiagnosis; 
  }
  
  
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
  
  //Diagnosis Details
  addDiagnosis(){
    debugger;
    this.diagnosisList.push(this.diagnosisdetails.value); 
    this.diagnosisdetails.reset();
    //this.resetDiagnosis();
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
  this.proceduredetails.reset();
  //this.resetProcedure();
}
toggleProcedure() {
  this.isprocedure = ! this.isprocedure;
  }       
  resetProcedure(){
    this.proceduredetails.reset();
    //this.resetProcedure();
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
  this.patientmedForm.reset();
 //this.resetMedication();
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



onSubmitUserDetails(value: any){
  console.log(value);
}
onMedicationSubmit(){

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





//Nevigate to Emergency Info Form
onPatientSubmit() {
  //    localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['/EmerencyInfo']);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  
  // genders = [
  //   "Male",
  //   "Female",
  //   "Other"
  // ];
  
  // Relation =[
  //   "Father",
  //   "Mother",
  //   "Other"
  // ];
  
  //  option = [
  //   {id: 'y', name: 'YES'},
  //   {id: 'n', name: 'NO'},
   
  // ];
  
  // alergy=[
  //   "food",
  //   "Fungi",
  //   "Drug",
  //   "Plant",
  //   "Venom or Salivary",
  //   "Other",
  // ];
  
  // onSubmitUserDetails(value: any){
  //   console.log(value);
  // }
  // onMedicationSubmit(){
  
  // }
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
  
  
  
  
  
  //Nevigate to Emergency Info Form
  // onPatientSubmit() {
  //   //    localStorage.setItem('isLoggedin', 'true');
  //       this.router.navigate(['/EmerencyInfo']);
  //   }
    toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    }
    toggleDiable() {
      this.isReadonly = true;
    }
  
   myControl = new FormControl();
   options: string[] = ['Ayahuasca', 'Cocaine', 'Hallucinogens'];
   filteredOptions: Observable<string[]> | undefined;
  
   
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
