import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';
@Component({
  selector: 'app-medicationmasterform',
  templateUrl: './medicationmasterform.component.html',
  styleUrls: ['./medicationmasterform.component.scss']
})
export class MedicationmasterformComponent implements OnInit {
  medicationForm!: FormGroup;
  constructor(private formBuilder : FormBuilder,private service: AdminmasterdataService,
    private router : Router) { }

  ngOnInit(): void {


    this.medicationForm = this.formBuilder.group({
        
      DrugName: [''],
      DrugForm : [''],
      DrugStrength : [''],
      ActiveIngredient : [''],
      DrugManufacturerName : ['']
     // IsProcedureDepricated : ['']
     
    })

   


  }

  medication=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

 

  get f() { return this.medicationForm.controls; }



  onSubmit() {
    debugger;
   console.log(this.medicationForm.value)


   this.service.savemedicationdata(this.medicationForm.value)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/admin/medication-data']);
    },
    error=>{
      this.router.navigate(['/register'])
      console.log(error);
    })




  


}







}
