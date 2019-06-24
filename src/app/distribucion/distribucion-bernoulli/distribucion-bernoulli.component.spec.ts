import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionBernoulliComponent } from './distribucion-bernoulli.component';

describe('DistribucionBernoulliComponent', () => {
  let component: DistribucionBernoulliComponent;
  let fixture: ComponentFixture<DistribucionBernoulliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionBernoulliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionBernoulliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
