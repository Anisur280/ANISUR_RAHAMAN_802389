import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSignUpComponent} from './Components/User/user-sign-up/user-sign-up.component';
import {MentorSignUpComponent} from './Components/Mentor/mentor-sign-up/mentor-sign-up.component';
import {HomeComponent} from './Components/home/home.component';
import {LoginComponent } from './Components/login/login.component';
import {UserDashboardComponent} from './Components/User/user-dashboard/user-dashboard.component';
import {AdminComponent} from './Components/admin/admin.component';
import {MentorDashboardComponent} from './Components/Mentor/mentor-dashboard/mentor-dashboard.component';
import { UserCompleteComponent } from './Components/User/user-complete/user-complete.component';
import { UserCurrentComponent } from './Components/User/user-current/user-current.component';
import { ProposalComponent } from './Components/proposal/proposal.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'UserSignUp',component:UserSignUpComponent},
  {path:'MentorSignUp',component:MentorSignUpComponent},
  {path:'Login',component:LoginComponent},
  {path:'udashboard',component:UserDashboardComponent},
  {path:'admin',component:AdminComponent},
  {path:'mdashboard',component:MentorDashboardComponent},
  {path: 'udashboard/ucomplete',component:UserCompleteComponent},
  {path: 'udashboard/ucurrent',component:UserCurrentComponent},
  {path: 'proposal',component:ProposalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
