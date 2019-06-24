import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistribucionRoutingModule } from './distribucion-routing.module';
import { DistribucionListComponent } from './distribucion-list/distribucion-list.component';
import { DistribucionPoissonComponent } from './distribucion-poisson/distribucion-poisson.component';
import { DistribucionNormalComponent } from './distribucion-normal/distribucion-normal.component';
import { DistribucionBernoulliComponent } from './distribucion-bernoulli/distribucion-bernoulli.component';
import { DistribucionResultModalComponent } from './distribucion-result-modal/distribucion-result-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DistribucionListComponent, DistribucionPoissonComponent, DistribucionNormalComponent, DistribucionBernoulliComponent, DistribucionResultModalComponent],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    NgbModule,
    //DistribucionRoutingModule
  ],
  entryComponents: [
    DistribucionResultModalComponent
  ]
})
export class DistribucionModule { }
