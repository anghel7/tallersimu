import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionPoissonComponent } from './distribucion-poisson.component';

describe('DistribucionPoissonComponent', () => {
  let component: DistribucionPoissonComponent;
  let fixture: ComponentFixture<DistribucionPoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionPoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionPoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
