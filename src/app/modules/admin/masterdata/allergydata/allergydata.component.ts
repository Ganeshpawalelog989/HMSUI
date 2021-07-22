import { Component, OnInit } from '@angular/core';
import { AdminmasterdataService } from 'src/app/Service/adminmasterdata.service';
import { MatDialog } from '@angular/material/dialog';
import { AlleryComponent } from 'src/app/modules/allery/allery.component';
@Component({
  selector: 'app-allergydata',
  templateUrl: './allergydata.component.html',
  styleUrls: ['./allergydata.component.scss']
})
export class AllergydataComponent implements OnInit {

  constructor(private allergyservice:AdminmasterdataService,public dialog: MatDialog) { }

  ngOnInit(): void {
     this.AllergyData();
  }
  
  public listing : any[]=[];
  AllergyData() {
    debugger;
    this.allergyservice.getAllergyMaterdataList().subscribe((data: any[]) => {
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
    if(e.target.value ==="Add Allergy")
    {

    const dialogRef = this.dialog.open(AlleryComponent);
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
