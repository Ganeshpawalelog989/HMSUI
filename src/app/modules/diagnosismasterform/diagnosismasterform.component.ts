import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';

@Component({
  selector: 'app-diagnosismasterform',
  templateUrl: './diagnosismasterform.component.html',
  styleUrls: ['./diagnosismasterform.component.scss']
})
export class DiagnosismasterformComponent implements OnInit {
  dignosisForm!: FormGroup;
  constructor(private formBuilder : FormBuilder,private service: AdminmasterdataService,
    private router : Router) { }

  ngOnInit(): void {

    this.dignosisForm = this.formBuilder.group({
        
      DiagnosisType: [''],
      DiagnosisDescription : [''],
      //ActiveIngredient : ['']
     
     // IsProcedureDepricated : ['']
     
    })


  }

  diagnosis=[
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

  onSubmit() {
    debugger;
   console.log(this.dignosisForm.value)


   this.service.savediagnosisdata(this.dignosisForm.value)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/admin/diagnosis-data']);
    },
    error=>{
      this.router.navigate(['/register'])
      console.log(error);
    })


  }

}
