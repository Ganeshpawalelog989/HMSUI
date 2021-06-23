import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  forgotpasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  get f() { return this.forgotpasswordForm.controls; }
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
