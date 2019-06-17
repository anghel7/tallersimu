import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaSimulacionSemanaComponent } from './linea-simulacion-semana.component';

describe('LineaSimulacionSemanaComponent', () => {
  let component: LineaSimulacionSemanaComponent;
  let fixture: ComponentFixture<LineaSimulacionSemanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaSimulacionSemanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaSimulacionSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
