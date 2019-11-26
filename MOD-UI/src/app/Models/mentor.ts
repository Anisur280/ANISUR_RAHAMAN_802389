export class Mentor {
    public mentorid:string;
    public mentorname:string;
    public email:string;
    public password:string;
    public mobileno:string;
    public experience:string;
    public primaryskills:string;
    public timeslot:string;
    public active:boolean;

constructor() { 
    this.mentorid="M" + Math.round((Math.random()*8000));
    this.active=true;
    
    }
}