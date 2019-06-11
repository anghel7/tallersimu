import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LineaListComponent } from './linea-list/linea-list.component';
import { RouterModule } from '@angular/router';
import { LineaSimulacionComponent } from './linea-simulacion/linea-simulacion.component';
import { ChartsModule } from 'ng2-charts';
import { LineaCreateComponent } from './linea-create/linea-create.component';
import { LineaEditComponent } from './linea-edit/linea-edit.component';

@NgModule({
  declarations: [
    LineaListComponent,
    LineaSimulacionComponent,
    LineaCreateComponent,
    LineaEditComponent
  ],
  exports: [
    LineaListComponent,
    LineaSimulacionComponent,
    LineaCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    ReactiveFormsModule
    //LineaRoutingModule
  ]
})
export class LineaModule { }
