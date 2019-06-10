import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineaRoutingModule } from './linea-routing.module';
import { LineaListComponent } from './linea-list/linea-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LineaListComponent
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
