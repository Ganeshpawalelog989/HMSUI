import { Component, OnInit } from '@angular/core';

interface PatientUser {
  PatientId: string;
  PatientName: string;
  Date: string;
  status: string;
}

const user: PatientUser[] = [
  {
    PatientId: '1',
    PatientName: 'Sachin',
    Date: '02/03/2021',
    status: 'Nurse Process',
  },
  {
    PatientId: '2',
    PatientName: 'Meharsh',
    Date: '02/03/2021',
    status: 'Nurse Process',
  },
  {
    PatientId: '3',
    PatientName: 'Anand',
    Date: '02/03/2021',
    status: 'Nurse Process',
  },
  {
    PatientId: '4',
    PatientName: 'Santosh',
    Date: '02/03/2021',
    status: 'Nurse Process',
  },
];

@Component({
  selector: 'app-today-appointmentnew',
  templateUrl: './today-appointmentnew.component.html',
  styleUrls: ['./today-appointmentnew.component.scss'],
})
export class TodayAppointmentnewComponent implements OnInit {
  ngOnInit(): void {}
  public searchText: any = '';
  isPrint: boolean = true;

  myFlagForSlideToggle: boolean = true;

  // disabled : boolean
  btnValue: string = '';
  btnValue1: string = '';

  isChecked = true;

  public selectedPatient: string = '';
  users = user;
  userStatus: any;

  show(selectedPatientId: any) {
    debugger;
    this.selectedPatient = selectedPatientId;
    this.userStatus = this.users.find((x) => x.PatientId == selectedPatientId);
    console.log(this.userStatus.status);

    if (this.userStatus.PatientId == selectedPatientId) {
      if (this.userStatus.status == 'Active') {
        this.btnValue = 'InActive';
        this.btnValue1 = 'Blocked';
      }
      if (this.userStatus.status == 'InActive') {
        this.btnValue = 'Active';
        this.btnValue1 = 'Blocked';
      }
      if (this.userStatus.status == 'Blocked') {
        this.btnValue = 'Active';
        this.btnValue1 = 'InActive';
      }
    }
  }
  Patient: any;
  getCurrentStatus(e: any) {
    debugger;
    console.log(e);
    if (this.userStatus.status == 'Active') {
      this.userStatus.status = e;
    }
    if (this.userStatus.status == 'InActive') {
      this.userStatus.status = e;
    }
    if (this.userStatus.status == 'Blocked') {
      this.userStatus.status = e;
    }
  }
  saveStatus(data: any) {
    //this.getCurrentStatus(data)

    this.userStatus = data;
    this.selectedPatient = '';

    console.log(this.userStatus);
  }
  cancleStatus() {
    this.selectedPatient = '';
  }
}
