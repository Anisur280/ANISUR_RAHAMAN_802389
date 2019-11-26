export class Skill {
    public skillId:string;
    public skillName:string;
    public toc:string;
    public skillFee:number;
    public duration:string;


    
    constructor() { 
        this.skillId="S" + Math.round((Math.random()*8000));
        
        
    }   
}