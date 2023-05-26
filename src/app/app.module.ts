import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesModule } from './pages/pages.module';

import { NopageFoundComponent } from './nopage.found/nopage.found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


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
    PagesModule,
    AppRoutingModule
  ],
  exports:[RouterModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
