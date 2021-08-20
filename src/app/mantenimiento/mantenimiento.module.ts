import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { UsuarioComponent } from './containers/usuario/usuario.component';
import { PerfilComponent } from './containers/perfil/perfil.component';
import { UsuarioMantComponent } from './components/usuario-mant/usuario-mant.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { PerfilDetalleComponent } from './components/perfil-detalle/perfil-detalle.component';
import { AplicacionDetalleComponent } from './components/aplicacion-detalle/aplicacion-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng-lts/table';
import { ButtonModule } from 'primeng-lts/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [
    UsuarioComponent,
    PerfilComponent,
    UsuarioMantComponent,
    UsuarioListaComponent,
    PerfilDetalleComponent,
    AplicacionDetalleComponent,
  ],
  imports: [
    CommonComponentsModule,
    CommonModule,
    MantenimientoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
})
export class MantenimientoModule {}
