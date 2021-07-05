import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendnotes',
  templateUrl: './sendnotes.component.html',
  styleUrls: ['./sendnotes.component.scss']
})
export class SendnotesComponent implements OnInit {
  [x: string]: any;


  constructor() { }

      ngOnInit(): void {
      }
    
      patientDetails: FormGroup = this.formBuilder.group({
      
      });
   
}
