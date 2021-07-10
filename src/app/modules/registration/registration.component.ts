import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import {AuthenticationService} from 'src/app/Service/AuthService';
import {Patient} from 'src/app/Model/Patient';
import {UserService} from 'src/app/Service/user.service'
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterUser  } from 'src/app/Model/RegisterUser'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {
  regiForm!: FormGroup;
  submitted = false;
  register: any;
  constructor(private formBuilder: FormBuilder, 
    private service: UserService,
    private userServ : AuthenticationService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
      this.regiForm = this.formBuilder.group({
        
        Fname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
        Lname : ['', Validators.required],
        Email : ['', [Validators.required, Validators.email]],
        RoleId : ['', Validators.required],
        ContactNumber: ['', Validators.required]
       // Dob : ['', [Validators.required]],
      })
  
  }

 

  // convenience getter for easy access to form fields
  get f() { return this.regiForm.controls; }

  onSubmit() {
    debugger;
      this.submitted = true;
       
      // stop here if form is invalid
      if (this.regiForm.invalid) {
          return;
      }

     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.regiForm.value))

      this.userServ.register(this.regiForm.value)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/login']);
    },
    error=>{
      this.router.navigate(['/register'])
      console.log(error);
    })
  }

    
  onReset() {
    this.submitted = false;
    this.regiForm.reset();
}

  getAllData()
 {
  this.service.getAllPost().subscribe(data => {
    console.log("data get successfully");
    this.register=data;
    })
  }

 
}


