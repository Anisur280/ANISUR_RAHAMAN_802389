import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Mentor } from 'src/app/Models/mentor';
import { SkillService } from 'src/app/Services/skill.service';
import { Skill } from 'src/app/Models/skill';
import { TrainingService } from 'src/app/Services/training.service';
import { Training } from 'src/app/Models/training';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/Services/payment.service';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
item:Mentor;
list:Mentor[];
list1:Skill[];
SkillId:string[]=[];
list2:number[]=[];
item1:Training;
list3:Training[];
primarySkills;
timestart;
msg:string;
userid;
count;
currentdate=new Date();

adddays=Math.round((Math.random()*9));

i=1;
    constructor(private userService : UserService,private payservice:PaymentService, private service:SkillService,private service1:TrainingService,private router:Router) {
      this.item1= new Training();
     
     }

  public isCollapsed = false;
  ngOnInit() {
    
    this.service.GetAll().subscribe(data=>this.list1=data)
  }
  

  onSubmit(){
    this.userService.SearchMentor(this.primarySkills,this.timestart).subscribe(k=>{
      this.list=k;
      k.forEach(element => {
        console.log(element)
            this.service.GetName(element.primaryskills).subscribe(j=>{
                if(j!=null){
                  this.list2.push(j.skillFee)
                  this.SkillId.push(j.skillId)
                  console.log(j.skillFee);
                }
                else{
                  console.log(null);

                  this.list2.push(null)
                }})
      });
      if(this.list2!=null){
        this.count= k.length;
      }
      else{
        this.count=0;
      }
    });
  }

  Send(id:string,timeslot:string,skillFee:number,sid:string,item:Mentor)
 {
   if(localStorage.getItem("login")=="yes"){
     this.item1.userId=localStorage.getItem("uid");
     this.item1.mentorId=id;
     this.item1.timeSlot=timeslot;
     this.item1.progress="0%";
     this.item1.startDate= new Date();
     this.item1.endDate= new Date(this.currentdate.setDate(this.currentdate.getDate()+this.adddays)); 
     if(this.item1.startDate===this.item1.endDate)
     {
      this.item1.status="Completed";
     }
     else
     {
      this.item1.status="Current";
     }
     this.item1.rating=null;
     this.item1.skillId=sid;

     this.service1.training(this.item1);
     this.payservice.paydetails(this.item1,item,skillFee);
     this.router.navigate(['/proposal'])
   }
   else{
     alert("Sorry To interrupt !!You Must Login");
    this.router.navigate(['/Login'])

   }
   

 }
}
