import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NurseProfile } from 'src/app/Model/NurseProfile';
import { AuthenticationService } from 'src/app/Service/AuthService';
import { HospitalAuthServiceService } from 'src/app/Service/hospital-auth-service.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-nurse-myprofile',
  templateUrl: './nurse-myprofile.component.html',
  styleUrls: ['./nurse-myprofile.component.scss']
})
export class NurseMyprofileComponent implements OnInit {
  
  regiForm!: FormGroup;
  submitted = false;
  register: any;
  Hospital_Details :  NurseProfile;
  constructor(private formBuilder: FormBuilder,
    private service: UserService,
    private userServ : AuthenticationService,
    private router : Router,
    private route : ActivatedRoute,
    private Hostipaluser: HospitalAuthServiceService ) { }

    public pId:string;
    ngOnInit(): void {

    debugger;
    var patientuser= localStorage.getItem('currentUser');
    var user = JSON.parse(patientuser);
    this.pId= user.userId; 
    console.log(this.pId);
    this.getHospitaldetails();
    this.regiForm = this.formBuilder.group({
        
      Fname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
      Lname : ['', Validators.required],
      Email : ['', [Validators.required, Validators.email]],
      RoleId : ['', Validators.required],
      ContantNumber :['',Validators.required]
    })

  }

  getHospitaldetails(){
    debugger;
    this.Hostipaluser.getHospitalById(this.pId).subscribe(data1=>{  
      debugger;
      console.log(data1);
      this.Hospital_Details = data1;
    },
    error=>{
      //this.router.navigate(['patient'])
      console.log(error);
    })
  }

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
    //this.router.navigate(['/login']);
  },
  error=>{
    //this.router.navigate(['/register'])
    console.log(error);
  })
}

}
