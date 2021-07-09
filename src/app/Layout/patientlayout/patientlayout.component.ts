import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientlayout',
  templateUrl: './patientlayout.component.html',
  styleUrls: ['./patientlayout.component.scss']
})
export class PatientlayoutComponent implements OnInit {
  sideBarOpen = true;


  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  
}
