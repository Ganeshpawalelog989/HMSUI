
import {​​​​​​​​​ Component, OnInit }​​​​​​​​​​​​​​​​ from'@angular/core';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder } from'@angular/forms';
// import {​​​​​​​​​​​​​​​​ NotesService }​​​​​​​​​​​​​​​​ from'../../../service/notes/notes.service';
// import {​​​​​​​​​​​​​​​​ Notes }​​​​​​​​​​​​​​​​ from'../../../model/notes';
// import {​​​​​​​​​​​​​​​​ ToastService }​​​​​​​​​​​​​​​​ from'src/app/service/toast/toast.service';
 
@Component({
  selector: 'app-sendnotes',
  templateUrl: './sendnotes.component.html',
  styleUrls: ['./sendnotes.component.scss']
})
export class SendnotesComponent implements OnInit {

  // form!: FormGroup;
  // publicusers = [];
  // public note: any;
  // designation: any;
  // submitted = false
  // formBuilder: any;
  // users: any;
  // toastService: any;
  // constructor(private noteService: NotesService,privateformBuilder: FormBuilder,
  // privatetoastService: ToastService) {​​​​​​​​​​​​​​​​ }​​​​​​​​​​​​​​​​
   
  //ngOnInit(): void {​​​​​​​​​​​​​​​​
  // this.form = this.formBuilder.group({​​​​​​​​​​​​​​​​
  // recieverId:new FormControl('', [Validators.required]),
  // message:new FormControl('',[Validators.required,Validators.maxLength(200)]),
  // designation:new FormControl(),
  // urgency:new FormControl('',[Validators.required])
  //     }​​​​​​​​​​​​​​​​)
  // this.designation = this.form.value.designation;
  // this.noteService.getUsersByRole().subscribe((val: any[])=> {​​​​​​​​​​​​​​​​
  // this.users = val.filter(user => {​​​​​​​​​​​​​​​​
  // TODO: sender id is hardcoded for now . would be fetched from session
  // return user.userId !== 23;
  //       }​​​​​​​​​​​​​​​​);
  // console.log(val);
  //     }​​​​​​​​​​​​​​​​)
  //   }​​​​​​​​​​​​​​​​
  // match(){​​​​​​​​​​​​​​​​
  // let senderId = 23
  // let recieverId = this.form.value
  // if(senderId != recieverId)
  // return true;
  //   }​​​​​​​​​​​​​​​​
  // sendNotes() {​​​​​​​​​​​​​​​​
  // this.submitted = true;
  // if (this.form.invalid) {​​​​​​​​​​​​​​​​
  // return;
  //     }​​​​​​​​​​​​​​​​
  // let newNotes: Notes = this.form.value;
  // // TODO: sender id is hardcoded for now . would be fetched from session
  // newNotes.senderId = 23;
  // this.noteService.sendNotes(newNotes).subscribe(
  //   (  data: { message: any; })=> {​​​​​​​​​​​​​​​​
  // this.toastService.show(data.message, {​​​​​​​​​​​​​​​​ classname:'bg-success text-light', delay:5000 }​​​​​​​​​​​​​​​​)
  //       }​​​​​​​​​​​​​​​​,
  //   (  error: any)=> {​​​​​​​​​​​​​​​​
  // this.toastService.show('Server Error please try later', {​​​​​​​​​​​​​​​​ classname:'bg-danger text-light', delay:5000 }​​​​​​​​​​​​​​​​);
  //       }​​​​​​​​​​​​​​​​)
  //   }​​​​​​​​​​​​​​​​
   
  // populateDesgination() {​​​​​​​​​​​​​​​​
  // this.form.get('designation').setValue(
  // this.users.find((u: { userId: any; })=>u.userId === this.form.get('recieverId').value).role.role);
  //   }​​​​​​​​​​​​​​​​
   
  // getf() {​​​​​​​​​​​​​​​​ return this.form.controls; }​​​​​​​​​​​​​​​​
  //
  populateDesgination() {​​​​​​​​​​​​​​​​
  }

  publicsendNote = [];
  constructor() {​​​​​​​​​​​​​​​​ }​​​​​​​​​​​​​​​​
   
  public sendNote:type[] = [
    
  ];
  
   
  ngOnInit(): void {​​​​​​​​​​​​​​​​
  // TODO: Sender id is hardcoded - needs to be updated after login
  // this.noteService.getSentNotes(23).subscribe(val=> {​​​​​​​​​​​​​​​​
  // console.log(val);
  // this.sendNote = val;
  //     }​​​​​​​​​​​​​​​​)
  
    }​​​​​​​​​​​​​​​​
    
  sentNotes() {​​​​​​​​​​​​​​​​
    }​​​​​​​​​​​​​​​​
  }​​​​​​​​​​​​​​​​

function newFormGroup(arg0: {}) {
  throw new Error('Function not implemented.');
}

export interface type{
  firstName:string;
  lastName:string;
  role:number;
  date: string;
  message: string;
}

