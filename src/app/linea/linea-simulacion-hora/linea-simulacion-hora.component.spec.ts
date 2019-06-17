import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaSimulacionHoraComponent } from './linea-simulacion-hora.component';

describe('LineaSimulacionHoraComponent', () => {
  let component: LineaSimulacionHoraComponent;
  let fixture: ComponentFixture<LineaSimulacionHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaSimulacionHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaSimulacionHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
