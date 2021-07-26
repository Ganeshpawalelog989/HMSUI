export class EmailSend {
    // ToEmail : string = "meharsh.gohadkar94@gmail.com";
    // Subject : string = "Welcome User";
    // Body : String =`Your Registration has been done
    //                     Your oneTime password - 'Patient@123'
    //                         Please change it ASAP`;

    ToEmail : string;
    Subject : string
    Body : String
    constructor(ToEmail : string,Subject : string, Body : String)
    {
        this.ToEmail = ToEmail ;
        this.Subject = Subject;
        this.Body = Body
        
    }

}