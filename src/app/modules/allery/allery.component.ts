import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allery',
  templateUrl: './allery.component.html',
  styleUrls: ['./allery.component.scss']
})
export class AlleryComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
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

   Allery: FormGroup = this.formBuilder.group({
   Typeofallery :['' , Validators.required],
   alleryname :['',Validators.required]   
   });


}
