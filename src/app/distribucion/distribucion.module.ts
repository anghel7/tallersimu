import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistribucionRoutingModule } from './distribucion-routing.module';
import { DistribucionListComponent } from './distribucion-list/distribucion-list.component';
import { DistribucionPoissonComponent } from './distribucion-poisson/distribucion-poisson.component';
import { DistribucionNormalComponent } from './distribucion-normal/distribucion-normal.component';
import { DistribucionBernoulliComponent } from './distribucion-bernoulli/distribucion-bernoulli.component';
import { DistribucionResultModalComponent } from './distribucion-result-modal/distribucion-result-modal.component';

@NgModule({
  declarations: [DistribucionListComponent, DistribucionPoissonComponent, DistribucionNormalComponent, DistribucionBernoulliComponent, DistribucionResultModalComponent],
  imports: [
    CommonModule,
    //DistribucionRoutingModule
  ],
  entryComponents: [
    DistribucionResultModalComponent
  ]
})
export class DistribucionModule { }
