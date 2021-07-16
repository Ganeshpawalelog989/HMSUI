import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { usernotes } from 'src/app/Model/UserNotes';
import { NotesService } from '../../Service/notes.service';
@Component({
  selector: 'app-sent',
  templateUrl: './sentnotes.component.html',
  styleUrls: ['./sentnotes.component.scss'],
})
export class SentComponent implements OnInit {
  public sendNote: usernotes[] = [];
  constructor(private noteService: NotesService) {}

  form = new FormGroup({});

  ngOnInit(): void {
    // TODO: Sender id is hardcoded - needs to be updated after login
    this.noteService.getSentNotes(23).subscribe((val) => {
      console.log(val);
      this.sendNote = val;
    });
  }
  sentNotes() {}
}