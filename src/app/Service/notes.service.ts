import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  UserRole } from '../Model/NotesUser';
import { Notes } from '../Model/NotesUser';
import { environment } from '../../environments/environment';
import { usernotes } from '../Model/NotesUser';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  getUsersByRole(userRole: string): Observable<UserRole[]> {
    // return this.http.get<User[]>(
    //   `${environment.baseUrl}/user-api/user/getUsersByRole?role=${userRole}`
    return this.http.get<UserRole[]>(`${environment.baseurlRole}?role=${userRole}`);
    
  }
  sendNotes(newNote: usernotes): Observable<any> {
    return this.http.post<usernotes>(`${environment.baseUrlNotes}`,newNote);
  }
  getSentNotes(senderId: number): Observable<usernotes[]> {
    return this.http.get<usernotes[]>(
      `${environment.baseUrl}/notes-service/note/getSentNotes?senderId=${senderId}`
    );
  }
  getRecieveNotes(recieverId: number): Observable<usernotes[]> {
    return this.http.get<usernotes[]>(
      `${environment.baseUrl}/notes-service/note/getRecieveNotes?recieverId=${recieverId}`
    );
  }
  reply(replyNote: string, noteId: number): Observable<any> {
    const data = {
      noteId: noteId,
      reply: replyNote,
    };
    return this.http.post(
      `${environment.baseUrl}/notes-service/note/reply`,
      data
    );
  }
  deleteNoteById(noteId: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseUrl}/notes-service/note/deleteNoteById?id=${noteId}`
    );
  }
}