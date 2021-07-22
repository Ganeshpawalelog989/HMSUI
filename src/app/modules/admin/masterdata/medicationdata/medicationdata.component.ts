import { Component, OnInit } from '@angular/core';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';
import { MatDialog } from '@angular/material/dialog';
import { MedicationmasterformComponent } from 'src/app/modules/medicationmasterform/medicationmasterform.component';
@Component({
  selector: 'app-medicationdata',
  templateUrl: './medicationdata.component.html',
  styleUrls: ['./medicationdata.component.scss']
})
export class MedicationdataComponent implements OnInit {

  constructor(private medicationservice:AdminmasterdataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.MedicationData();
  }


  public listing : any[]=[];
  MedicationData() {
    debugger;
    this.medicationservice.getMedicationMaterdataList().subscribe((data: any[]) => {
      console.log(data);
      this.listing=data;
    })
  }


  openDialog( e: any) {
    //const dialogRef = this.dialog.open(AddAppointmentComponent);
    debugger;
    //  this.td =this.tiles.find(x=>x.text);
    // console.log(this.td);
    console.log(e.target.value);
    if(e.target.value ==="Add Medication")
    {

    const dialogRef = this.dialog.open(MedicationmasterformComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    }
  }




}
