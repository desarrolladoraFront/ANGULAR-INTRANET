import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesModule } from './pages/pages.module';

import { NopageFoundComponent } from './nopage.found/nopage.found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    AuthModule,
    PagesModule,
    AppRoutingModule, 
    HttpClientModule

  ],
  exports:[
    RouterModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
