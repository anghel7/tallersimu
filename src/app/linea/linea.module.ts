import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineaRoutingModule } from './linea-routing.module';
import { LineaListComponent } from './linea-list/linea-list.component';
import { RouterModule } from '@angular/router';
import { LineaSimulacionComponent } from './linea-simulacion/linea-simulacion.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    LineaListComponent,
    LineaSimulacionComponent
  ],
  exports: [
    LineaListComponent,
    LineaSimulacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
    //LineaRoutingModule
  ]
})
export class LineaModule { }
