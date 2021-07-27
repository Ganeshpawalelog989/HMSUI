import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';

@Component({
  selector: 'app-proceduremasterform',
  templateUrl: './proceduremasterform.component.html',
  styleUrls: ['./proceduremasterform.component.scss']
})
export class ProceduremasterformComponent implements OnInit {
  procForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private service: AdminmasterdataService,
    private router : Router) { }

    currentValue(e:any){
      console.log(e);
    }
  ngOnInit(): void {

    this.procForm = this.formBuilder.group({
        
      ProcedureCode: [''],
      ProcedureDescription : ['']
      //IsProcedureDepricated : ['',]
     
    })

  }


  get f() { return this.procForm.controls; }



  onSubmit() {
    debugger;
   console.log(this.procForm.value)


   this.service.saveproceduredata(this.procForm.value)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/admin/procedure-data']);
    },
    error=>{
      this.router.navigate(['/register'])
      console.log(error);
    })




    //this.submitted = true;
     
    // stop here if form is invalid
    // if (this.regiForm.invalid) {
    //     return;
    // }

   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.regiForm.value))

  //   this.userServ.hospregister(this.regiForm.value)
  // .subscribe(data=>{
  //   console.log(data);
  //   this.router.navigate(['/login']);
  // },
  // error=>{
  //   this.router.navigate(['/register'])
  //   console.log(error);
  // })


}















}
