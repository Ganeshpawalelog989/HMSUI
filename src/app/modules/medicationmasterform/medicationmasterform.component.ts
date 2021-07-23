import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medicationmasterform',
  templateUrl: './medicationmasterform.component.html',
  styleUrls: ['./medicationmasterform.component.scss']
})
export class MedicationmasterformComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
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

   Allery: FormGroup = this.formBuilder.group({
   Typeofallery :['' , Validators.required],
   alleryname :['',Validators.required]   
   });





}
