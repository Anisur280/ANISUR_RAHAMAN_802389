import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Mentor } from './Models/mentor';
import { Skill } from './Models/skill';
import { Router } from '@angular/router';
import { SkillService } from './Services/skill.service';
import { UserService } from './Services/user.service';
import { MentorService } from './Services/mentor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MOD-UI';
  primarySkills;
  timestart;
  searchForm: FormGroup;
  submitted = false;
 m;
item:Mentor;
list:Mentor[];

  item1:Skill;
  list1:Skill[];
  constructor(private formBuilder:FormBuilder,private router:Router,private service:SkillService,private service1:UserService,private service2:MentorService){
    
   
  }
  public isCollapsed = false;


  ngOnInit(){
    
    

  }
  

  isLogin(){
    if(localStorage.getItem('login')==="yes" )
    {
      this.m=localStorage.getItem("msg");
      return true;
     
    }
    else
        return false;

  }
  logoutUser(){
    localStorage.removeItem('login')
    localStorage.removeItem('msg')
    localStorage.removeItem('token')
    localStorage.removeItem('active');
    localStorage.removeItem('userid')

    this.m="null";
    this.router.navigate(['/Login'])
  }

 
}
