import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit {

  constructor( private Router : Router ) { }

  ngOnInit(): void {
  }

AB()
{
  this.Router.navigate(['login'])
}

GetChildData(data : any){  
  console.log(data);  
}

}
