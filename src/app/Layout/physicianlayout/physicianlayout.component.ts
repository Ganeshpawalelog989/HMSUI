import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physicianlayout',
  templateUrl: './physicianlayout.component.html',
  styleUrls: ['./physicianlayout.component.scss']
})
export class PhysicianlayoutComponent implements OnInit {

  sideBarOpen = true;


  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
