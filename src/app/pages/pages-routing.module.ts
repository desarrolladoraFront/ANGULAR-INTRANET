import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DirectorioDeExtensionesComponent } from './directorio-de-extensiones/directorio-de-extensiones.component';

//IMPORTACIÓN RUTA COMERCIAL
import { ComercialComponent } from './comercial/comercial.component';
import { CotizadorComponent } from './comercial/cotizador/cotizador.component';
import { ListaDePreciosComponent } from './comercial/lista-de-precios/lista-de-precios.component';
import { EntregasADomicilioComponent } from './comercial/entregas-a-domicilio/entregas-a-domicilio.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { BoletinComponent } from './comercial/lista-de-precios/boletin/boletin.component';
import { DistribuidorComponent } from './comercial/lista-de-precios/distribuidor/distribuidor.component';
import { RefaccionPublicoComponent } from './comercial/lista-de-precios/refaccion-publico/refaccion-publico.component';
import { BoletinDistribuidorComponent } from './comercial/lista-de-precios/boletin-distribuidor/boletin-distribuidor.component';
import { BoletinFronterizoComponent } from './comercial/lista-de-precios/boletin-fronterizo/boletin-fronterizo.component';
import { RefaccionDistribuidorComponent } from './comercial/lista-de-precios/refaccion-distribuidor/refaccion-distribuidor.component';
import { FronterizoComponent } from './comercial/lista-de-precios/fronterizo/fronterizo.component';
import { PublicoComponent } from './comercial/lista-de-precios/publico/publico.component';
import { PerfilComponent } from './users/perfil/perfil.component';

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
  },
  {path: 'users', component: UsersComponent,
   children:[
    {path: 'miperfil', component: PerfilComponent}
   ]
  }, 
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
