import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnosismasterform',
  templateUrl: './diagnosismasterform.component.html',
  styleUrls: ['./diagnosismasterform.component.scss']
})
export class DiagnosismasterformComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
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

   Allery: FormGroup = this.formBuilder.group({
   Typeofallery :['' , Validators.required],
   alleryname :['',Validators.required]   
   });




}
