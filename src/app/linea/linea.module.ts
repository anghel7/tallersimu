import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LineaListComponent } from './linea-list/linea-list.component';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { LineaCreateComponent } from './linea-create/linea-create.component';
import { LineaEditComponent } from './linea-edit/linea-edit.component';
import { LineaSimulacionResultsComponent } from './linea-simulacion-results/linea-simulacion-results.component';
import { LineaParadaComponent } from './linea-parada/linea-parada.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './my-modal/my-modal.component';
import { LineaSimulacionItemComponent } from './linea-simulacion-item/linea-simulacion-item.component';

@NgModule({
  declarations: [
    LineaListComponent,

    LineaCreateComponent,
    LineaEditComponent,
    LineaSimulacionResultsComponent,
    LineaParadaComponent,
    MyModalComponent,
    LineaSimulacionItemComponent
  ],
  exports: [
    LineaListComponent,

    LineaCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    ReactiveFormsModule,
    NgbModule
    //LineaRoutingModule
  ],
  entryComponents: [MyModalComponent]
})
export class LineaModule { }
//ng build --prod --base-href "https://anghel7.github.io/tallersimu/"
