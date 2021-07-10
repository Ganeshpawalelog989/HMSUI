
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-patient-user-sheduling',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './patient-user-sheduling.component.html',
  styleUrls: ['./patient-user-sheduling.component.scss']
})
export class PatientUserShedulingComponent implements OnInit {
  movies = [
    { title: 'The Shawshank Redemption (1994)' },
    { title: 'The Godfather (1972)' },
    { title: 'The Godfather: Part II (1974)' },
    { title: 'The Dark Knight (2008)' },
    { title: '12 Angry Men (1957)' },
    { title: 'Schindler\'s List (1993)' },
    { title: 'The Lord of the Rings: The Return of the King (2003)' },
    { title: 'Pulp Fiction (1994)' }
];


  constructor(private fb : FormBuilder , private router : Router , private modal: NgbModal) { }

  scheduleForm : any;
  ngOnInit(): void {
    // this.scheduleForm=this.fb.group({
    //   PhysicianName : ['', Validators.required,Validators.minLength(3),Validators.maxLength(15)],
    //   PatientDatastatus :['',Validators.required],
    //   availabledateSlot : ['', Validators.required],
     //});
   }

  // openDialog(){
  //   this.router.navigate(['addappointment']);
  // }
  // openEditappointment(){
  //   this.router.navigate(['editappoinment']);
  // }
  // openDeleteappointment(){
  //   this.router.navigate(['deleteappoinment']);
  // }

  // arrayphysician : physician[]=[
  //   {value : 0 , viewValue: 'mahesh'},
  //   {value : 1, viewValue: 'santosh'},
  //   {value : 2 , viewValue: 'meharsh'},
  //   {value : 3 , viewValue: 'sachin'},
  //   {value : 4 , viewValue: 'amol'},
  //   {value : 5 , viewValue: 'anand'},    
  // ]

currentDate = new Date();
 
  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    ])
  });

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true;

 

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }
 editEventt(title : string):boolean {
   this.events=[
     
   ]
   return true;
 }
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }




}
export interface physician{
  value : number ;
  viewValue : string;
}




