import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { from } from 'rxjs';
import { NotesService } from '../../Service/notes.service';
import { Notes, usernotes } from '../../Model/NotesUser';
import { ToastService } from 'src/app/Service/toast.service';

@Component({
  selector: 'app-sendnotes',
  templateUrl: './sendnotes.component.html',
  styleUrls: ['./sendnotes.component.scss'],
})
export class SendnotesComponent implements OnInit {
  form: FormGroup;
  public users: any[];
  public note: any;
  designation: any;
  submitted = false;
  flag =true;

  constructor(
    private noteService: NotesService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      recieverId: new FormControl('', [Validators.required]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(200),
      ]),
      designation: new FormControl(),
      urgency: new FormControl('', [Validators.required]),
    });
    this.designation = this.form.value.designation;
    this.noteService.getUsersByRole(this.note).subscribe((val: any[]) => {
      this.users = val.filter((user: any) => {
        // TODO: sender id is hardcoded for now . would be fetched from session
        return this.noteService.getUsersByRole;
      });
      console.log(val);
    });
  }

   hideform()
   {
     this.flag =!this.flag
   }
  match() {
    let senderId = 23;
    let recieverId = this.form.value;
    if (senderId != recieverId) return true;
    return false;
  }

  sendNotes() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    let newNotes: usernotes = this.form.value;
    // TODO: sender id is hardcoded for now . would be fetched from session
    //newNotes.SenderId = "";
    this.noteService.sendNotes(newNotes).subscribe(
      (data: { message: any }) => {
        this.toastService.show(data.message, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      },
      (error: any) => {
        this.toastService.show('Server Error please try later', {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      }
    );
  }

  populateDesgination() {
    this.form
      .get('designation')
      .setValue(
        this.users.find(
          (u: { userId: any }) => u.userId === this.form.get('recieverId').value
        ).role.role
      );
  }

  get f() {
    return this.form.controls;
  }
}
