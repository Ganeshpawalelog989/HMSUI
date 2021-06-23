import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    hide: boolean = false;
    loading = false;
    submitted = false;
    pwdpattern='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$';
    
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changepassForm: FormGroup = this.fb.group({
    password: ['', [Validators.required,  Validators.minLength(8)]],
    newpassword: ['', [Validators.required,Validators.pattern(this.pwdpattern)]],
    confirmnewpassword: ['', [Validators.required]]
  },
  
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
   
    
}








}
