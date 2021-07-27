import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parse } from 'date-fns';
import { Login } from 'src/app/Model/Login';
import { AuthenticationService } from 'src/app/Service/AuthService';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    hide: boolean = false;
    loading = false;
    submitted = false;
    
  //  pwdpattern='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$';
    
  constructor(private fb: FormBuilder,
    private passServ : AuthenticationService,
    private router : Router) { }

 // @Input() email : string;

  ngOnInit(): void {
    
  }

  
  changepassForm: FormGroup = this.fb.group({
    email : [''],
  defaultPass : ['',Validators.required],
   // password: ['', Validators.required,  Validators.minLength(8)],
    newpassword: ['', Validators.required],
    confirmnewpassword: ['', Validators.required]
  },
  
  // passObj : Login = new Login(this.f.email.value,this.f.newpassword.value,
  //   this.f.confirmnewpassword.value)
  {
    validators:this.MustMatch('newpassword','confirmnewpassword')
  }
)
  get f() { return this.changepassForm.controls; }

  MustMatch(controlName:string,matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control=formGroup.controls[controlName];
      const matchingcontrol =formGroup.controls[matchingControlName];
      if(matchingcontrol.errors && matchingcontrol.errors.MustMatch)
      {
        return
      }
      if(control.value !== matchingcontrol.value){
       matchingcontrol.setErrors({MustMatch:true})
      }
      else{
       matchingcontrol.setErrors(null)
      }
    }
 }

 onSubmit(){
   debugger;
  //  if(this.passObj ==null)
  //  {
  //    console.log("Invalid entry");
  //  }
   this.passServ.forgetPassword(this.changepassForm.value.email,
    this.changepassForm.value.newpassword)
    .subscribe(data=>{
      console.log(data);
      console.log("Password has changed");
      this.router.navigate(['/login']);
    })

}

}
