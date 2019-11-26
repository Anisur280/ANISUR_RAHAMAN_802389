import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-user-complete',
  templateUrl: './user-complete.component.html',
  styleUrls: ['./user-complete.component.css']
})
export class UserCompleteComponent implements OnInit {
  item:Training;
  list3:Training[]=[];
  constructor(private service1:TrainingService) { }

  ngOnInit() {
    this.service1.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="complete" && element.userId==localStorage.getItem('uid')){
          this.list3.push(element)
        }
      })
    });
  }
}