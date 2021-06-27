import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-sendnotes',
  templateUrl: './sendnotes.component.html',
  styleUrls: ['./sendnotes.component.scss']
})
export class SendnotesComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
   sendnotes: FormGroup = this.formBuilder.group({
    DOB :[''],
    Receivername :['',Validators.required],
    ReceiverDesignation:['',Validators.required],
    message :[''],
    urgencylevel :['']
  })

  alergy=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];


}
