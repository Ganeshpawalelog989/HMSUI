export class Login{
    
  public email : string;
  public  username?:string ;
​
  public  password:string;
​
  public  confirmPassword:string;
​
   public token?:string;
​
  public  Role?:string;

  constructor (email : string , password :string,confirmPassword:string)
  {
    this.email = email;
    //  this.username=username;
      this.password=password;
      this.confirmPassword=confirmPassword;
    //  this.token=token;
    //  this.Role=Role;
  }

}