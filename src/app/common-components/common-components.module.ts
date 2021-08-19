import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [PageNotFoundComponent, CardComponent],
  imports: [
    CommonModule,
  ]
})
export class CommonComponentsModule { }
