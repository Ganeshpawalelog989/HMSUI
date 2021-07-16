import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AuthenticationService} from 'src/app/Service/AuthService';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private userServ : AuthenticationService,private router : Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.userServ.logout();
    this.router.navigate(['/login']);
  }


  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


}
