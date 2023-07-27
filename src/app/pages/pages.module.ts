import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DirectorioDeExtensionesComponent } from './directorio-de-extensiones/directorio-de-extensiones.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComercialComponent } from './comercial/comercial.component';
import { CotizadorComponent } from './comercial/cotizador/cotizador.component';
import { ListaDePreciosComponent } from './comercial/lista-de-precios/lista-de-precios.component';
import { EntregasADomicilioComponent } from './comercial/entregas-a-domicilio/entregas-a-domicilio.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { BoletinComponent } from './comercial/lista-de-precios/boletin/boletin.component';
import { PublicoComponent } from './comercial/lista-de-precios/publico/publico.component';
import { DistribuidorComponent } from './comercial/lista-de-precios/distribuidor/distribuidor.component';
import { RefaccionPublicoComponent } from './comercial/lista-de-precios/refaccion-publico/refaccion-publico.component';
import { BoletinDistribuidorComponent } from './comercial/lista-de-precios/boletin-distribuidor/boletin-distribuidor.component';
import { BoletinFronterizoComponent } from './comercial/lista-de-precios/boletin-fronterizo/boletin-fronterizo.component';
import { RefaccionDistribuidorComponent } from './comercial/lista-de-precios/refaccion-distribuidor/refaccion-distribuidor.component';
import { FronterizoComponent } from './comercial/lista-de-precios/fronterizo/fronterizo.component';
import { PerfilComponent } from './users/perfil/perfil.component';
import { EducacionComponent } from './educacion/educacion.component';



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
    FronterizoComponent,
    PerfilComponent,
    EducacionComponent,
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
    EducacionComponent
  ]
})
export class PagesModule { }
