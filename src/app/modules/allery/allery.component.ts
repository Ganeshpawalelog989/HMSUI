import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';

@Component({
  selector: 'app-allery',
  templateUrl: './allery.component.html',
  styleUrls: ['./allery.component.scss']
})
export class AlleryComponent implements OnInit {
  AllergyForm!: FormGroup;
  constructor(private formBuilder : FormBuilder,private service: AdminmasterdataService,
    private router : Router) { }

  ngOnInit(): void {

    this.AllergyForm = this.formBuilder.group({
        
      AllergyName: [''],
      AllergyDescription : [''],
      //ActiveIngredient : ['']
     
     // IsProcedureDepricated : ['']
     
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

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];



  onSubmit() {
    debugger;
   console.log(this.AllergyForm.value)


   this.service.saveallergydata(this.AllergyForm.value)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/admin/allergymaster']);
    },
    error=>{
      this.router.navigate(['/register'])
      console.log(error);
    })


  }


}
