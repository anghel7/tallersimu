import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineaRoutingModule } from './linea-routing.module';
import { LineaListComponent } from './linea-list/linea-list.component';

@NgModule({
  declarations: [
    LineaListComponent
  ],
  exports: [
    LineaListComponent
  ],
  imports: [
    CommonModule,
    //LineaRoutingModule
  ]
})
export class LineaModule { }
