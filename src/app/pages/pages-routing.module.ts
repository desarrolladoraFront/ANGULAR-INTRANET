import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DirectorioDeExtensionesComponent } from './directorio-de-extensiones/directorio-de-extensiones.component';

//IMPORTACIÓN RUTA COMERCIAL
import { ComercialComponent } from './comercial/comercial.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { ListaDePreciosComponent } from './lista-de-precios/lista-de-precios.component';
import { EntregasADomicilioComponent } from './entregas-a-domicilio/entregas-a-domicilio.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { BoletinComponent } from './boletin/boletin.component';
import { DistribuidorComponent } from './distribuidor/distribuidor.component';
import { RefaccionPublicoComponent } from './refaccion-publico/refaccion-publico.component';
import { BoletinDistribuidorComponent } from './boletin-distribuidor/boletin-distribuidor.component';
import { BoletinFronterizoComponent } from './boletin-fronterizo/boletin-fronterizo.component';
import { RefaccionDistribuidorComponent } from './refaccion-distribuidor/refaccion-distribuidor.component';
import { FronterizoComponent } from './fronterizo/fronterizo.component';
import { PublicoComponent } from './publico/publico.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component:DashboardComponent },
      { path: 'usuarios', component:UsersComponent },
      { path: 'extensiones', component: DirectorioDeExtensionesComponent}
    ]
  },
  {
    path: 'comercial', component: ComercialComponent,
    children:[
      {path: 'cotizador', component: CotizadorComponent},
      {path: 'listadeprecios', component: ListaDePreciosComponent},
        {path: 'listadeprecios/boletin', component: BoletinComponent},
        {path: 'listadeprecios/publico', component: PublicoComponent},
        {path: 'listadeprecios/distribuidor', component: DistribuidorComponent},
        {path: 'listadeprecios/refaccionpublico', component: RefaccionPublicoComponent},
        {path: 'listadeprecios/boletindistribuidor', component: BoletinDistribuidorComponent },
        {path: 'listadeprecios/boletinfronterizo', component:BoletinFronterizoComponent },
        {path: 'listadeprecios/refacciondistribuidor', component: RefaccionDistribuidorComponent},
        {path: 'listadeprecios/fronterizo', component: FronterizoComponent},
        

      {path: 'entregasadomicilio', component: EntregasADomicilioComponent},
      {path: 'e-commerce', component: ECommerceComponent},
      {path: '**', redirectTo: 'comercial'}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class PagesRoutingModule { }
