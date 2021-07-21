import { Data } from "@angular/router";

export class UserRole {
   Role_Id:number;
  Role_Type: string;
}

export class Notes {
    senderId: number;
    noteId: number;
    replyNote: string;
    
  }
  

//   export class usernotes {
//     notesId : number;  //autoincrement
//     senderId: number;
//     recieverId: number;
//     firstName: string;
//     lastName: string;
//     role: string;
//     date: string;
//     message: string;
//   }
  export class usernotes{
    NoteId :number;
    SenderId:string;
    RecieverId:string;
    SenderName:string;
    RecieverName:string;
    Note:string;
    LoggedOn:Date;
    Designation:string;
    Urgency_level:boolean;
  }