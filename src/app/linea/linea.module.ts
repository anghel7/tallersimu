import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LineaListComponent } from './linea-list/linea-list.component';
import { RouterModule } from '@angular/router';
import { LineaSimulacionComponent } from './linea-simulacion/linea-simulacion.component';
import { ChartsModule } from 'ng2-charts';
import { LineaCreateComponent } from './linea-create/linea-create.component';
import { LineaEditComponent } from './linea-edit/linea-edit.component';
import { LineaSimulacionDiaComponent } from './linea-simulacion-dia/linea-simulacion-dia.component';
import { LineaSimulacionMesComponent } from './linea-simulacion-mes/linea-simulacion-mes.component';
import { LineaSimulacionHoraComponent } from './linea-simulacion-hora/linea-simulacion-hora.component';
import { LineaSimulacionSemanaComponent } from './linea-simulacion-semana/linea-simulacion-semana.component';
import { LineaSimulacionResultsComponent } from './linea-simulacion-results/linea-simulacion-results.component';

@NgModule({
  declarations: [
    LineaListComponent,
    LineaSimulacionComponent,
    LineaCreateComponent,
    LineaEditComponent,
    LineaSimulacionDiaComponent,
    LineaSimulacionMesComponent,
    LineaSimulacionHoraComponent,
    LineaSimulacionSemanaComponent,
    LineaSimulacionResultsComponent
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
