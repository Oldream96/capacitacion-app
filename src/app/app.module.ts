import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { AuditoriaModule } from './auditoria/auditoria.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ToastModule } from 'primeng-lts/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonComponentsModule,
    BrowserModule,
    AppRoutingModule,
    AuditoriaModule,
    MantenimientoModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
