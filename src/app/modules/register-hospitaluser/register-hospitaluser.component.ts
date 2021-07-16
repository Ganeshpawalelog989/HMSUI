import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/AuthService';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-register-hospitaluser',
  templateUrl: './register-hospitaluser.component.html',
  styleUrls: ['./register-hospitaluser.component.scss']
})
export class RegisterHospitaluserComponent implements OnInit {
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
        //Dob : ['', [Validators.required]],
        ContantNumber :['',Validators.required]
      })
  
  }

 

  // convenience getter for easy access to form fields
  get f() { return this.regiForm.controls; }

  onSubmit() {
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

  closeDib()
  {
         
  }


}
