import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  submitted = false;
  
  constructor(private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.diagnosisdetails.invalid) {
        return;
    }

 }

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
 
 option =[
   {id: 'y', name: 'Yes'},
   {id: 'n', name: 'No'}
 ]
 
 
 diagnosisdetails: FormGroup = this.formBuilder.group({​​​
   Code :['',Validators.required ],
   Description :['',Validators.minLength]
     })
 

}
