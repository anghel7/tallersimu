import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaSimulacionMesComponent } from './linea-simulacion-mes.component';

describe('LineaSimulacionMesComponent', () => {
  let component: LineaSimulacionMesComponent;
  let fixture: ComponentFixture<LineaSimulacionMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaSimulacionMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaSimulacionMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
