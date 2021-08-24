import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardComponent } from './components/card/card.component';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { InactivoDirective } from './directives/inactivo.directive';


@NgModule({
  declarations: [PageNotFoundComponent, CardComponent, AutenticacionComponent,],
  imports: [
    CommonModule,
  ],
  exports: [
    PageNotFoundComponent,
    CardComponent,
  ],
})
export class CommonComponentsModule { }
