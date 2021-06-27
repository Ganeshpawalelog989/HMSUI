import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { first } from 'rxjs/operators';
import {UserService} from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private router : Router,
     private route: ActivatedRoute,
     private service : UserService) { }
  addAppointForm : any;

  id: any;
  isAddMode: any;
  loading = false;
  submitted = false;
  btnValue : any;
  FormPage : any;

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

   this.addAppointForm = this.fb.group({
    appointId : ['',Validators.required],
    mtitle : ['',Validators.required],
    description : ['',Validators.required],
    dateSlot : ['', Validators.required],
    timeSlot : ['',Validators.required],
    paitentDetails : ['',Validators.required],
    editHistory : ['',Validators.required]
    });

    if(this.isAddMode)
    {
      this.FormPage = "Add your appointment Here"
      this.btnValue = "Add Appointment";
    }
    else
    {
      this.FormPage = "Edit your appointment Here "
      this.btnValue = "Edit Appointment";
    }

  if (!this.isAddMode) {
    this.service.getById(this.id)
        .pipe(first())
        .subscribe(x => this.addAppointForm.patchValue(x));
}
  }
  isFlag : boolean =false;
  ViewPatient : ViewPatientDetails[] =[];

  get f() { return this.addAppointForm.controls; }

  onSubmit()
  {
    if (this.isAddMode) {
      this.addAppointment();
  } else {
      this.editDetails(this.id);
  }

  }

  addAppointment()
  {
  //   this.p.Appointment_Id = '8',
  //  this.p.Meeting_Title = this.addAppointForm.mtitle,
  //  this.p.Description = this.addAppointForm.description,
  //  this.p.Date = this.addAppointForm.dateSlot,
  //  this.p.Time = this.addAppointForm.timeSlot,
  //  this.p.Patient_Details = this.addAppointForm.paitentDetails,
  //  this.p.Edit_History = this.addAppointForm.editDetails;

 

    console.log(this.addAppointForm.value);
   this.ViewPatient.push(this.addAppointForm.value);
    console.log("Added Data Successfully");

   this.isFlag=true;
   console.log("Open Table : ",this.isFlag); 
  this.ViewPatient = [
    {Appointment_Id :'1',Meeting_Title : 'Polio',Description: 'Diseses',Patient_Details : 'Serious',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'2',Meeting_Title : 'Sugar',Description: 'Diseses',Patient_Details : 'Normal',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'3',Meeting_Title : 'Chicken pox',Description: 'Diseses',Patient_Details : 'Serious',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'4',Meeting_Title : 'Fever',Description: 'Diseses',Patient_Details : 'Normal',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'5',Meeting_Title : 'Polio',Description: 'Diseses',Patient_Details : 'Moderate',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'6',Meeting_Title : 'Polio',Description: 'Diseses',Patient_Details : 'Normal',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'7',Meeting_Title : 'Polio',Description: 'Diseses',Patient_Details : 'Serious',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'}
  ]}

  BackToScheduleform()
  {
    console.log("Back to Schedule form");
    this.router.navigate(['']);
  }

  editDetails(id : string)
  {
    var res = this.ViewPatient.find(item=>item.Appointment_Id == id);
    if(res==null)
    {
      console.log("Id is not found");
    }
    else{

        res.Description = this.addAppointForm.Description.value;
        res.Meeting_Title = this.addAppointForm.mtitle.value;
        res.Patient_Details = this.addAppointForm.paitentDetails.value;
      // res.Description = "Changed Description",
      // res.Meeting_Title ="Changed Meeting Title",
      console.log(res);
    }

  }
  deleteDetails( id : string)
  {
    this.ViewPatient = this.ViewPatient.filter(item=>item.Appointment_Id != id);
    console.log(this.ViewPatient);
  }

}


export class ViewPatientDetails
{
  Appointment_Id : string;
  Meeting_Title : string
  Description : string;
  Patient_Details : string;
  Date : string;
  Time : string;
  Edit_History : string;

  constructor( Appointment_Id : string,Meeting_Title : string,Description : string, Patient_Details : string,Date : string,Time : string,Edit_History : string)
  {
    this.Appointment_Id = Appointment_Id;
    this.Meeting_Title = Meeting_Title;
    this.Description = Description;
    this.Patient_Details= Patient_Details;
    this.Date = Date;
    this.Time =Time;
    this.Edit_History = Edit_History
  }

}

