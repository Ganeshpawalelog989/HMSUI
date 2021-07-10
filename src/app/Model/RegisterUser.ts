

export class RegisterUser{
    public Id : number;
    public RoleId : string ; 
    public PatientId ! : string ;
    public Fname : string ;
    public Lname :string 
    public  Dob : Date;
    public Age : number;
    public Gender : string; 
    public Race :string  ;
    public Ethinicity :string;  
    public LanguagesKnown : string;
    public Email : string ;
    public HomeAddress : string;  
    public ContactNumber : string; 
    public EmergencyFname :string ;
    public EmergencyLname :string ;
    public Relationship :string ;
    public EmergencyEmail :string; 
    public EmergencyAddress:string; 
    public EmergencyMobileNo:string;  
    public AccessFlag :string ;
    public   Ssn :string;
    public Title : string;
    public NurseId :string;
    public NurseName :string;
    public PhysicianName :string;
    public PhysicianId :string;
   public Password : string


    constructor
(Id:number,     RoleId :string ,
    PatientId  : string ,
    Fname : string ,
    Lname :string ,
    Dob : Date,
    Age : number,
    Gender : string, 
    Race :string  ,
    Ethinicity :string,  
    LanguagesKnown : string,
    Email : string ,
    HomeAddress : string,  
    ContactNumber : string, 
    EmergencyFname :string ,
    EmergencyLname :string ,
    Relationship :string ,
    EmergencyEmail :string, 
    EmergencyAddress:string, 
    EmergencyMobileNo:string,  
    AccessFlag :string ,
    Ssn :string ,
    Title :string, 
    NurseId :string, 
    NurseName :string, 
   PhysicianName :string, 
   PhysicianId :string ,
   Password : string
   
 ){
    this.Id=Id;
    this.RoleId=RoleId;
    this.PatientId=PatientId;
    this.Fname=Fname;
    this.Lname=Lname;
    this.Dob=Dob;
    this.Age=Age;
    this.Gender=Gender;
    this.Race=Race;
    this.Ethinicity=Ethinicity;
    this.LanguagesKnown=LanguagesKnown;
    this.Email=Email;
    this.HomeAddress=HomeAddress;
    this.ContactNumber=ContactNumber;
    this.EmergencyFname=EmergencyFname;
    this.EmergencyLname=EmergencyLname;
    this.Relationship=Relationship;
    this.EmergencyEmail=EmergencyEmail;
    this.EmergencyAddress=EmergencyAddress;
    this.AccessFlag=AccessFlag;
    this.EmergencyMobileNo=EmergencyMobileNo;
    this.Ssn=Ssn;
    this.Title=Title;
    this.NurseId=NurseId;
    this.NurseName=NurseName;
    this.PhysicianName=PhysicianName;
    this.PhysicianId=PhysicianId;
    this.Password=Password
    }
   

}

