import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //{path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AuthRoutingModule { }
