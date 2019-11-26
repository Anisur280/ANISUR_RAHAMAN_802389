import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserSignUpComponent } from './Components/User/user-sign-up/user-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { MentorSignUpComponent } from './Components/Mentor/mentor-sign-up/mentor-sign-up.component';
import { MentorService } from './Services/mentor.service';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginService } from './Services/login.service';
import { UserDashboardComponent } from './Components/User/user-dashboard/user-dashboard.component';
import { MentorDashboardComponent } from './Components/Mentor/mentor-dashboard/mentor-dashboard.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { UpdateDialogComponent } from './Components/update-dialog/update-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCompleteComponent } from './Components/User/user-complete/user-complete.component';
import { UserCurrentComponent } from './Components/User/user-current/user-current.component';
import { ProposalComponent } from './Components/proposal/proposal.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    MentorSignUpComponent,
    HomeComponent,
    LoginComponent,
    UserDashboardComponent,
    MentorDashboardComponent,
    AdminComponent,
    DialogComponent,
    UpdateDialogComponent,
    UserCompleteComponent,
    UserCurrentComponent,
    ProposalComponent,
    SignUpComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  
  ],
  providers: [UserService,MentorService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
