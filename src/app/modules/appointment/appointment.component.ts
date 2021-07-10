import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
