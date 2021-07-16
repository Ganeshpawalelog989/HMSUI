import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurselayout',
  templateUrl: './nurselayout.component.html',
  styleUrls: ['./nurselayout.component.scss']
})
export class NurselayoutComponent implements OnInit {

  sideBarOpen = true;


  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
