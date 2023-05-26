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
