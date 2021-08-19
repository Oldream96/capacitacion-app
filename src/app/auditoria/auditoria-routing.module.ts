import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../common-components/components/page-not-found/page-not-found.component';
import { AuditoriaErroresComponent } from './containers/auditoria-errores/auditoria-errores.component';


const routes: Routes = [
  { path: 'auditoria', component: AuditoriaErroresComponent },
  // { path: '**', pathMatch: 'full',component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditoriaRoutingModule { }
