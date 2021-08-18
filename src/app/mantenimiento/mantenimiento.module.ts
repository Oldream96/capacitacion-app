import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { UsuarioComponent } from './containers/usuario/usuario.component';
import { PerfilComponent } from './containers/perfil/perfil.component';
import { UsuarioMantComponent } from './components/usuario-mant/usuario-mant.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';


@NgModule({
  declarations: [UsuarioComponent, PerfilComponent, UsuarioMantComponent, UsuarioListaComponent],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
