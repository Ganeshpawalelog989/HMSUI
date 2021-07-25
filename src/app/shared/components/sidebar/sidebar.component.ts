import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger;
    var patientuser= localStorage.getItem('currentUser');
    var user = JSON.parse(patientuser);
    console.log(user);
  }

}
