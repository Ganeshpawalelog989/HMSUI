import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {AuthenticationService } from 'src/app/Service/AuthService'
import { NotificationService } from 'src/app/Service/notification.service';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() Myoutput : EventEmitter<any> =new EventEmitter();
  outputmessage: string="I am child component";
  myOutput: any;

  sendValues(){
    this.myOutput.emit(this.outputmessage);
    }
  
   

  hide: boolean = false;
  loading = false;
  submitted = false;
  value : string = "";

  constructor(private fb: FormBuilder,
     private service : AuthenticationService,
     private router : Router,
     private route : ActivatedRoute , private toastr : NotificationService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  // onLogin() {
  //   if (!this.loginForm.valid) {
  //     return;
  //   }
  //   console.log(this.loginForm.value);

  //   this.service.login(this.loginForm.controls.email.value,this.loginForm.controls.password.value)
  //   .subscribe({
  //     next : () => {
  //       const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //                   this.router.navigateByUrl(returnUrl);
  //     },
  //     error: any => {
  //       this.loading = false;
  //   }
  //   })

  // }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
   // debugger;
      // reset alerts on submit
     // this.alertService.clear();
     console.log("Inside the On submit");
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      console.log(this.loginForm.value);
      this.loading = true;
      this.service.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(data=>{
              this.showSuccessLogin();
                this.router.navigate(['/scheduling']);
                console.log("Welcome to Nurse Page");
     
              },
              error => {
                 // this.alertService.error(error);
                 this.showErrorLogin();
                 this.router.navigate(['/login']);
                  this.loading = false;
                  
              });
  }
  showSuccessLogin()
  {
    this.toastr.showSuccess("Successfully!!!","You'r logged in");  
  }
  showErrorLogin()
  {
    this.toastr.showSuccess("Error!!!","Username or paswword is incorrect");
  }


}
function output() {
  throw new Error('Function not implemented.');
}

