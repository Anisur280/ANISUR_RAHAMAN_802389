import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id;
  password;
  token:any;
  constructor(private _service:LoginService,private router:Router) { }

  ngOnInit() {
  }
  public Login(){
    this._service.Login(this.id,this.password).subscribe(data=>
      {
        console.log(data)
        localStorage.setItem('msg',data.username)
        if(data.message=="User")
        {
          alert('Successfull Login as User!!\n\n');
          this.router.navigate(['/udashboard']);
          localStorage.setItem('uid',this.id)
          localStorage.setItem('login','yes');
          localStorage.setItem('active',data.active);
          localStorage.setItem('userid',data.useid)
          }

        else if(data.message=="Mentor")
        {
        alert('Successfull Login as Mentor!!\n\n');
        this.router.navigate(['/mdashboard']);
        localStorage.setItem('mid',this.id)
        localStorage.setItem('login','yes');
        localStorage.setItem('active',data.active);
        localStorage.setItem('mentorid',data.useid);
        }

        else if(data.message=="Admin")
        {
          alert('Successfull Login as Admin!!\n\n');
          this.router.navigate(['admin']);
          localStorage.setItem('login','yes');
          localStorage.setItem('token',data.token);
  
          }

        else
        {
        alert('Invalid Credentials!!\n\n');
        this.router.navigate(['/Login']);
        }

      });

      
 
  }
}

