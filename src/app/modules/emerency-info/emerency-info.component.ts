import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router'
@Component({
  selector: 'app-emerency-info',
  templateUrl: './emerency-info.component.html',
  styleUrls: ['./emerency-info.component.scss']
})
export class EmerencyInfoComponent implements OnInit {
  
  constructor(private formBuilder : FormBuilder,
    private router : Router,) { }


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
   
  ]

  EmerencyInfo: FormGroup = this.formBuilder.group({
    FirstName :['',Validators.required ],
    LastName :['',Validators.minLength],
    Email :['',Validators.required],
    HomeAddress :['',Validators.required],
    ContantNo :['',Validators.required],
    Relation :['',Validators.required]
   });


}
