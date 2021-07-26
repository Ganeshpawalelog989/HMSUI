import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailSendService } from 'src/app/Service/email-send.service';
import { NotificationService } from 'src/app/Service/notification.service';
import {EmailSend} from '../../Model/email-send';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private router : Router,
    private emailService : EmailSendService,
    private notifyService : NotificationService ) { }

  ngOnInit(): void {
  }


  forgotpasswordForm: FormGroup = this.fb.group({
     email: ['', [Validators.required, Validators.email]]
  })

  get f() { return this.forgotpasswordForm.controls; }


  showToasterSuccess(){
    this.notifyService.showSuccess("Email !!", "Successfully Send")
}
  SendEmail()
  {
    debugger;
    // this.router.navigate(['/change-password']);
    this.emailService.emailSendRegistration(new EmailSend(this.forgotpasswordForm.get('email').value,
    `User Registration`,
    `Welcome User , <br><br>
      <h4>${'Your temporary password'}</h4> - <h3>${'P@ssword@12'}</h3>.<br><br>

      <h4>${'Note'}</h4> :<h4>${'Please reset your password and dont share with anyone'}<h4>.
    `)).subscribe(data=>{
      console.log(data);
      console.log("Email has been Sent successfully!!!");
    })
    this.showToasterSuccess();
    this.forgotpasswordForm.reset();
   

    
  }
  onSubmit() {
    //this.submitted = true;
 // debugger;
    // reset alerts on submit
   // this.alertService.clear();
   console.log("Inside the On submit");
    // stop here if form is invalid
    if (this.forgotpasswordForm.invalid) {
        return;
    }
  }



}
