import { Component, OnInit } from '@angular/core';
//import { ViewSchedule } from '../physician-view/physician-view.component';

@Component({
  selector: 'app-recieve-notes',
  templateUrl: './recieve-notes.component.html',
  styleUrls: ['./recieve-notes.component.scss']
})
export class RecieveNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isFlagDetails : boolean =false;
  ViewScheduler : ViewSchedule[] =[];
  
  Recievednotes()
  {
   console.log("Open Table : ",this.isFlagDetails); 
  this.ViewScheduler = [
    {Appointment_Id :'1',Meeting_Title : 'Polio',Description: 'Diseses',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'2',Meeting_Title : 'Sugar',Description: 'Diseses',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'3',Meeting_Title : 'Chicken pox',Description: 'Diseses',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'4',Meeting_Title : 'Fever',Description: 'Diseses',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'5',Meeting_Title : 'Polio',Description: 'Diseses',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'6',Meeting_Title : 'Polio',Description: 'Diseses',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'},
    {Appointment_Id :'7',Meeting_Title : 'Polio',Description: 'Diseses',Date:'29/01/2021',Time: '20:08 hrs',Edit_History:'No History'}
  ]

  }

  openDetailsOfPatient()
  {
    this.isFlagDetails=true;
  }
  editDetails()
  {

  }
  deleteDetails(id : string)
  {
    this.ViewScheduler = this.ViewScheduler.filter(item=>item.Appointment_Id != id);
    console.log(this.ViewScheduler);
  }

}

export class ViewSchedule 
{
  Appointment_Id : string;
  Meeting_Title : string
  Description : string;
  Date : string;
  Time : string;
  Edit_History : string;

  constructor( Appointment_Id : string,Meeting_Title : string,Description : string,Date : string,Time : string,Edit_History : string)
  {
    this.Appointment_Id = Appointment_Id;
    this.Meeting_Title = Meeting_Title;
    this.Description = Description;
    this.Date = Date;
    this.Time =Time;
    this.Edit_History = Edit_History
  }



}
