import { Component, OnInit } from '@angular/core';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';
import { MatDialog } from '@angular/material/dialog';
import { ProceduremasterformComponent } from 'src/app/modules/proceduremasterform/proceduremasterform.component';
@Component({
  selector: 'app-proceduredata',
  templateUrl: './proceduredata.component.html',
  styleUrls: ['./proceduredata.component.scss']
})
export class ProceduredataComponent implements OnInit {

  constructor(private procedureservice:AdminmasterdataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ProcedureData();
 }
 
 public listing : any[]=[];
 ProcedureData() {
   debugger;
   this.procedureservice.getProcedureMaterdataList().subscribe((data: any[]) => {
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
  if(e.target.value ==="Add Procedure")
  {

  const dialogRef = this.dialog.open(ProceduremasterformComponent);
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
