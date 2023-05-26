import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DirectorioDeExtensionesComponent } from './directorio-de-extensiones/directorio-de-extensiones.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComercialComponent } from './comercial/comercial.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { ListaDePreciosComponent } from './lista-de-precios/lista-de-precios.component';
import { EntregasADomicilioComponent } from './entregas-a-domicilio/entregas-a-domicilio.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    DirectorioDeExtensionesComponent,
    PagesComponent,
    ComercialComponent,
    CotizadorComponent,
    ListaDePreciosComponent,
    EntregasADomicilioComponent,
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ], 
  exports: [
    DashboardComponent,
    ComercialComponent,
    UsersComponent,
    DirectorioDeExtensionesComponent,
  ]
})
export class PagesModule { }