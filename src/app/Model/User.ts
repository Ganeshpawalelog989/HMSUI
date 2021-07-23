export class User{
    
    public  RoleId :string;

    public  UserId :string;
    public  Title :string;
    public  FirstName :string;
    public  LastName :string;
    public  Email :string;
    public  ContactNumber :string;
    public  Ssn :string;
    public  RegistrationDate :Date;



  constructor(RoleId :string,UserId :string,Title :string,FirstName :string,
    LastName :string, Email :string,ContactNumber :string,Ssn :string,RegistrationDate :Date){
   this.RoleId=RoleId;
   this.UserId=UserId;
   this.Title=Title;
   this.FirstName=FirstName;
   this.LastName=LastName;
   this.Email=Email;
   this.ContactNumber=ContactNumber;
   this.Ssn=Ssn;
   this.RegistrationDate=RegistrationDate

  }


}

export class PatientUser extends User{

    public Dob : Date;
    public Age : number;
   public Gender : string; 
    public Race :string  ;
   public Ethinicity :string;  
   public LanguagesKnown : string;
   public HomeAddress : string;  
   public EmergencyFname :string ;
   public EmergencyLname :string ;
   public Relationship :string ;
   public EmergencyEmail :string; 
   public EmergencyAddress:string; 
    public EmergencyMobileNo:string;  
   public AccessFlag :string ;
    public TypeofAllergies :string;
    public IsAllergyFatal :boolean;
    public Password:string;

   constructor(RoleId :string,UserId :string,Title :string,FirstName :string,
    LastName :string, Email :string,ContactNumber :string,Ssn :string,RegistrationDate :Date,Dob:Date,Age:number,Gender:string,Race:string,Ethinicity:string,LanguagesKnown:string,
    HomeAddress:string,EmergencyFname:string,EmergencyLname:string,Relationship:string,
    EmergencyEmail:string,EmergencyAddress:string,EmergencyMobileNo:string,AccessFlag:string,
    TypeofAllergies:string,IsAllergyFatal :boolean,Password:string){
     
        super(RoleId, UserId,Title,FirstName,LastName,Email,ContactNumber,Ssn,RegistrationDate);
     
      this.Dob=Dob;
      this.Age=Age;
      this.Gender=Gender;
      this.Race=Race;
      this.Ethinicity=Ethinicity;
      this.LanguagesKnown=LanguagesKnown;
      this.HomeAddress=HomeAddress;
      this.EmergencyFname=EmergencyFname;
      this.EmergencyLname=EmergencyLname;
      this.Relationship=Relationship;
      this.EmergencyEmail=EmergencyEmail;
      this.EmergencyAddress=EmergencyAddress;
      this.EmergencyMobileNo=EmergencyMobileNo;
      this.AccessFlag=AccessFlag;
      this.TypeofAllergies=TypeofAllergies;
      this.IsAllergyFatal=IsAllergyFatal;
      this.Password=Password;
   }

}


export class NurseUser extends User
{

    constructor(RoleId :string,UserId :string,Title :string,FirstName :string,
    LastName :string, Email :string,ContactNumber :string,Ssn :string,RegistrationDate :Date)
    {
        super(RoleId, UserId,Title,FirstName,LastName,Email,ContactNumber,Ssn,RegistrationDate);
      
    }


}

export class PhysicianUser extends User
{

    constructor(RoleId :string,UserId :string,Title :string,FirstName :string,
    LastName :string, Email :string,ContactNumber :string,Ssn :string,RegistrationDate :Date)
    {
        super(RoleId, UserId,Title,FirstName,LastName,Email,ContactNumber,Ssn,RegistrationDate);
      
    }


}

export class HospitalUser extends User
{

    constructor(RoleId :string,UserId :string,Title :string,FirstName :string,
        LastName :string, Email :string,ContactNumber :string,Ssn :string,RegistrationDate :Date)
        {
            super(RoleId, UserId,Title,FirstName,LastName,Email,ContactNumber,Ssn,RegistrationDate);
          
        }
}




