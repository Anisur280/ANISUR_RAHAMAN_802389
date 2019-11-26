import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-user-current',
  templateUrl: './user-current.component.html',
  styleUrls: ['./user-current.component.css']
})
export class UserCurrentComponent implements OnInit {
  item:Training;
  list3:Training[]=[];
  constructor(private service1:TrainingService) { }

  ngOnInit() {
    this.service1.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="current" && element.userId==localStorage.getItem('uid')){
          this.list3.push(element)
        }
      })
    });
  }
}
