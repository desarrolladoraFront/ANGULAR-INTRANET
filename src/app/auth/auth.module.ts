import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { AuthService } from './services/user-service/authService.service';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
      ],
      imports: [
        CommonModule,
        RouterModule,
      ],
      exports:[
        RouterModule,
      ],
      providers: [
     //   AuthService
      ],
    })
    export class AuthModule { }