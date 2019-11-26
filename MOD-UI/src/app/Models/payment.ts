export class Payment {
    public paymentId:string;
    public userId:string;
    public mentorId:string;
    public trainingId:string;
    public ammount:string;
    public mentorAmmount:string;
   


    
    constructor() { 
        this.paymentId="P" + Math.round((Math.random()*8000));
    }
}
