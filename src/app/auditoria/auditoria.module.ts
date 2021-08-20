import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditoriaRoutingModule } from './auditoria-routing.module';
import { AuditoriaErroresComponent } from './containers/auditoria-errores/auditoria-errores.component';
import { AuditoriaFiltrosComponent } from './components/auditoria-filtros/auditoria-filtros.component';
import { ErroresListaComponent } from './components/errores-lista/errores-lista.component';
import {CalendarModule} from 'primeng-lts/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng-lts/table';
import { ButtonModule } from 'primeng-lts/button';


@NgModule({
  declarations: [AuditoriaErroresComponent, AuditoriaFiltrosComponent, ErroresListaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    AuditoriaRoutingModule,
    TableModule,
    ButtonModule,
  ]
})
export class AuditoriaModule { }
