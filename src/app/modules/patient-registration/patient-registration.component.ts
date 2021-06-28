import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/AuthService';
import { UserService } from 'src/app/Service/user.service';
import { MustMatch } from '../registration/must-match.validator';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  regiForm!: FormGroup;
  submitted = false;
  register: any;
 
  constructor(private formBuilder: FormBuilder, 
    private service: UserService,
    private userServ : AuthenticationService,
    private router : Router,
    private route : ActivatedRoute) { }



  ngOnInit(): void {
    this.regiForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
      
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contact : ['',Validators.required],
       dob:['',[Validators.required]],
       // role: ['', Validators.required],
       //Empid:['', Validators.required],
      // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
           ]
        ],

        confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });

  }
  
  get f() { return this.regiForm.controls; }
  onSubmit() {
    console.log("In reg form");
      this.submitted = true;

      // stop here if form is invalid
      if (this.regiForm.invalid) {
        debugger;
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

  registeCom()
  {
    
  }


}
