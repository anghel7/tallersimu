import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaSimulacionDiaComponent } from './linea-simulacion-dia.component';

describe('LineaSimulacionDiaComponent', () => {
  let component: LineaSimulacionDiaComponent;
  let fixture: ComponentFixture<LineaSimulacionDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaSimulacionDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaSimulacionDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
