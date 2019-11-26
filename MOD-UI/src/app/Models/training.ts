export class Training {
    public trainingId:string;
    public userId:string;
    public mentorId:string;
    public skillId:string;
    public startDate:Date;
    public endDate:Date;
    public timeSlot:string;
    public progress:string;
    public status:string;
    public rating:Float32Array;

    constructor() { 
        this.trainingId="T" + Math.round((Math.random()*8000));

    
        
        }

}
