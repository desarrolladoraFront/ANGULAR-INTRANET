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
import { BoletinComponent } from './boletin/boletin.component';
import { PublicoComponent } from './publico/publico.component';
import { DistribuidorComponent } from './distribuidor/distribuidor.component';
import { RefaccionPublicoComponent } from './refaccion-publico/refaccion-publico.component';
import { BoletinDistribuidorComponent } from './boletin-distribuidor/boletin-distribuidor.component';
import { BoletinFronterizoComponent } from './boletin-fronterizo/boletin-fronterizo.component';
import { RefaccionDistribuidorComponent } from './refaccion-distribuidor/refaccion-distribuidor.component';
import { FronterizoComponent } from './fronterizo/fronterizo.component';



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
    ECommerceComponent,
    BoletinComponent,
    PublicoComponent,
    DistribuidorComponent,
    RefaccionPublicoComponent,
    BoletinDistribuidorComponent,
    BoletinFronterizoComponent,
    RefaccionDistribuidorComponent,
    FronterizoComponent
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
