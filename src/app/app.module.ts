import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuclesComponent } from './bucles/bucles.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    FooterComponent,
    AsideMenuComponent,
    BuclesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
