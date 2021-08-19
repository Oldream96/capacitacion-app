import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { AuditoriaModule } from './auditoria/auditoria.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuditoriaModule,
    MantenimientoModule,
    CommonComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
