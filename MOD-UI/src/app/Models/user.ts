export class User {
    public userid:string;
    public username:string;
    public email:string;
    public password:string;
    public mobileno:string;
    public active:boolean;

constructor() { 
    this.userid="U" + Math.round((Math.random()*8000));
    this.active=true;

    
    }
}   