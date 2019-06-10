import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaSimulacionComponent } from './linea-simulacion.component';

describe('LineaSimulacionComponent', () => {
  let component: LineaSimulacionComponent;
  let fixture: ComponentFixture<LineaSimulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaSimulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaSimulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
