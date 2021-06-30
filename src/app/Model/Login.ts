export class Login{
    
  public  username:string ;
​
  public  password:string;
​
  public  confirmPassword:string;
​
   public token:string;
​
  public  Role:string;

  constructor (username : string  , password :string , confirmPassword : string , token : string , Role : string)
  {
      this.username=username;
      this.password=password;
      this.confirmPassword=confirmPassword;
      this.token=token;
      this.Role=Role;
  }

}