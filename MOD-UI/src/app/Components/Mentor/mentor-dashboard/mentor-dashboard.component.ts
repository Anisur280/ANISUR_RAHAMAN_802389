import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.css']
})
export class MentorDashboardComponent implements OnInit {
  item:Training;
  list:Training[];

  val1="";
  msg:string;

  constructor(private service:TrainingService) { }

  ngOnInit() {
  }
  CurrentTraining(){
    this.val1="CurrentTraining";
    this.service.CurrentTraining(localStorage.getItem('mid')).subscribe(k=>this.list=k)
 }

  CompletedTraining(){
   this.val1="CompletedTraining";
   this.service.CompletedTraining(localStorage.getItem('mid')).subscribe(k=>this.list=k)
  }

 check(){

   if(this.val1=="CurrentTraining"){
     return 1;
   }

   else if(this.val1=="CompletedTraining"){
     return 2;
   }
   
   else return 3;
 }

}
