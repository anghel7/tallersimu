import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaSimulacionResultsComponent } from './linea-simulacion-results.component';

describe('LineaSimulacionResultsComponent', () => {
  let component: LineaSimulacionResultsComponent;
  let fixture: ComponentFixture<LineaSimulacionResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaSimulacionResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaSimulacionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
