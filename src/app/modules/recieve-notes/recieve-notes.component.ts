
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotesService } from '../../Service/notes.service';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Notes } from '../../Model/NotesUser';
import { ToastService } from '../../Service/toast.service';
@Component({
  selector: 'app-recieve-notes',
  templateUrl: './recieve-notes.component.html',
  styleUrls: ['./recieve-notes.component.scss'],
})
export class RecieveNotesComponent implements OnInit {
  replyForm: FormGroup;
  receiveNote: any = [];
  selectedNoteId: any;
  submitted = false;
  f: any;
  constructor(
    private noteService: NotesService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.replyForm = this.formBuilder.group({
      reply: new FormControl('', [
        Validators.required,
        Validators.maxLength(200),
      ]),
    });

    this.getReciveNote();
  }

  getReciveNote() {
    // TODO: Sender id is hardcoded - needs to be updated after login
    this.noteService.getRecieveNotes(42).subscribe((val: any[]) => {
      console.log(val);
      this.receiveNote = val;
    });
  }

  open(content: any, selectedNoteId: any) {
    this.selectedNoteId = selectedNoteId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  delete(selectedNoteId: any) {
    this.noteService.deleteNoteById(selectedNoteId).subscribe(
      (data: { message: any }) => {
        console.log(data);
        this.toastService.show(data.message, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
        this.getReciveNote();
      },
      (error: any) => {
        this.toastService.show('Server Error please try later', {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      }
    );
  }

  sendNotes() {
    this.submitted = true;
    if (this.replyForm.invalid) return;

    this.noteService.reply(this.f.reply.value, this.selectedNoteId).subscribe(
      (data: { message: any }) => {
        console.log(data);
        this.toastService.show(data.message, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
        if (this.modalService.hasOpenModals()) {
          this.modalService.dismissAll();
          this.replyForm.reset();
        }
      },
      (error: any) => {
        this.toastService.show('Server Error please try later', {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
        if (this.modalService.hasOpenModals()) {
          this.modalService.dismissAll();
          this.replyForm.reset();
        }
      }
    );
  }

  getf() {
    return this.replyForm.controls;
  }
}
