import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineaRoutingModule } from './linea-routing.module';
import { LineaListComponent } from './linea-list/linea-list.component';
import { RouterModule } from '@angular/router';
import { LineaSimulacionComponent } from './linea-simulacion/linea-simulacion.component';


@NgModule({
  declarations: [
    LineaListComponent,
    LineaSimulacionComponent
  ],
  exports: [
    LineaListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    //LineaRoutingModule
  ]
})
export class LineaModule { }
