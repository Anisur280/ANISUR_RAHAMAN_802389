import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user';
import { Mentor } from 'src/app/Models/mentor';
import { MentorService } from 'src/app/Services/mentor.service';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/Services/skill.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  item:User;
  list:User[];
  item1:Mentor;
  list1:Mentor[];
  item2:Skill;
  item3:Skill;
  list2:Skill[];
  val1="";
  msg:string;
  status:string;
  blocksts="";
  showDialog:boolean;
  showDialog1:boolean;
  

  constructor(private service:UserService,private service1:MentorService,private fb:FormBuilder,private service2:SkillService,private router:Router) {
    this.item2=new Skill();
    this.item3=new Skill();
   }

  ngOnInit() {
    if(localStorage.getItem('token')==null){
      this.router.navigate(['/Login']);
    }
    
  }
  

  User(){
    this.val1="User";
    this.service.GetAll().subscribe(k=>this.list=k)
  }
  Mentor(){
    this.val1="Mentor"
    this.service1.GetAll().subscribe(data=>this.list1=data)
  }
  Skill(){
    this.val1="Skill"
    this.service2.GetAll().subscribe(data=>this.list2=data)

  }
 DeleteUser(uid:string)
 {
  this.service.Delete(uid).subscribe(k=>k=this.msg)
  alert('Successfull Delete!!\n\n');
 }

 BlockUser(id:string){
  this.service.Block(id).subscribe(k=>k=this.msg)
}

 DeleteMentor(mid:string)
 {
  this.service1.Delete(mid).subscribe(k=>k=this.msg)  
    alert('Successfull Delete!!\n\n');
 }

 EditSkill()
 {
  this.service2.Update(this.item3).subscribe(k=>k=this.msg)
  alert('Successfull Update!!\n\n');
 }

 
 DeleteSkill(sid:string)
 {
  this.service2.Delete(sid).subscribe(k=>k=this.msg)
  alert('Successfull Delete!!\n\n');
 }

 GetSkillById(sid:string)
 {
  this.service2.Search(sid).subscribe(k=>this.item3=k)
 }
 
AddSkill()
{
  this.service2.Add(this.item2).subscribe(k=>this.msg=k);
}

reloadPage(){
  this.ngOnInit();
}



  check(){
    if(this.val1=="User"){
      return 1;
    }
    else if(this.val1=="Mentor"){
      return 2;
    }
    else if(this.val1=="Skill"){
      return 3;
    }
    else return 4;
  }
}