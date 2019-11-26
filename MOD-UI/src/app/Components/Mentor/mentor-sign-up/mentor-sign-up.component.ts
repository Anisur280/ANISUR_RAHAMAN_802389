import { Component, OnInit } from '@angular/core';
import {Mentor} from 'src/app/Models/mentor';
import {MentorService} from 'src/app/Services/mentor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/mustmatch-validator';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/Services/skill.service';
import { Skill } from 'src/app/Models/skill';


@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {
 
  item:Mentor;
  list:Mentor[];
  item1:Skill;
  list1:Skill[];
  msg:any;
  regForm: FormGroup;
  submitted = false;
  constructor(private service:MentorService,private formBuilder: FormBuilder,private router:Router,private myservice:SkillService) {
    this.item = new Mentor();
   }

  ngOnInit() { 
    this.regForm = this.formBuilder.group({
       
      mentorname: ['', [Validators.required, Validators.maxLength(25),Validators.pattern('^[a-zA-Z ]*$')]],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(5)]],
       primaryskills: ['', [Validators.required]],
       experience: ['', [Validators.required]],
       timeslot: ['', [Validators.required]],
       mobileno: ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]]

     }
     );

     this.myservice.GetAll().subscribe(data=>this.list1=data)
 }
 get f() { return this.regForm.controls; }

  
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.regForm.invalid) {
        return;
    }
    else{
      this.service.Add(this.item).subscribe(k=>this.msg=k);
      console.log(this.msg);
    this.router.navigate(['/Login']);
  }
}
}