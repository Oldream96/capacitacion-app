import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacionComponent } from '../common-components/components/autenticacion/autenticacion.component';
import { PageNotFoundComponent } from '../common-components/components/page-not-found/page-not-found.component';
import { PerfilComponent } from './containers/perfil/perfil.component';
import { UsuarioComponent } from './containers/usuario/usuario.component';


const routes: Routes = [
  { path: '', component: AutenticacionComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: '**', pathMatch: 'full',component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
