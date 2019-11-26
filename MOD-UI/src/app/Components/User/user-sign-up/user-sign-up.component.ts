import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Models/user';
import {UserService} from 'src/app/Services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  item:User;
  list:User[];
  k:any;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private service:UserService,private router:Router) { 
    this.item = new User();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username :['',[Validators.required,Validators.maxLength(25),Validators.pattern('^[a-zA-Z ]*$')]],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(5)]],
       mobileno: ['', [Validators.required,Validators.pattern("^[0-9]*$"),  Validators.maxLength(10)]],

     });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else{
      this.service.Add(this.item).subscribe(k=>{
        console.log(k.status);
      });
    this.router.navigate(['/Login']);
    alert('Successfull Register!!\n\n');
    
  }
}
}