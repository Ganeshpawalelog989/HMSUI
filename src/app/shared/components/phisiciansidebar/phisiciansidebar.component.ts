import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phisiciansidebar',
  templateUrl: './phisiciansidebar.component.html',
  styleUrls: ['./phisiciansidebar.component.scss']
})
export class PhisiciansidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger;
    var patientuser= localStorage.getItem('currentUser');
    var user = JSON.parse(patientuser);
    console.log(user);
  }

}
