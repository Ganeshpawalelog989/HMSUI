import { Component, OnInit } from '@angular/core';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';
import { MatDialog } from '@angular/material/dialog';
import { DiagnosismasterformComponent } from 'src/app/modules/diagnosismasterform/diagnosismasterform.component';
@Component({
  selector: 'app-diagnosisdata',
  templateUrl: './diagnosisdata.component.html',
  styleUrls: ['./diagnosisdata.component.scss']
})
export class DiagnosisdataComponent implements OnInit {

  constructor(private diagnosisservice:AdminmasterdataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.DiagnosisData();
  }
   

  public listing : any[]=[];
  DiagnosisData() {
    debugger;
    this.diagnosisservice.getDiagnosisMaterdataList().subscribe((data: any[]) => {
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
    if(e.target.value ==="Add Diagnosis")
    {

    const dialogRef = this.dialog.open(DiagnosismasterformComponent);
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
