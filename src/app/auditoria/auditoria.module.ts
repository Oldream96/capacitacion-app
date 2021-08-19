import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditoriaRoutingModule } from './auditoria-routing.module';
import { AuditoriaErroresComponent } from './containers/auditoria-errores/auditoria-errores.component';
import { AuditoriaFiltrosComponent } from './components/auditoria-filtros/auditoria-filtros.component';
import { ErroresListaComponent } from './components/errores-lista/errores-lista.component';


@NgModule({
  declarations: [AuditoriaErroresComponent, AuditoriaFiltrosComponent, ErroresListaComponent],
  imports: [
    CommonModule,
    AuditoriaRoutingModule
  ]
})
export class AuditoriaModule { }
