import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaSimulacionItemComponent } from './linea-simulacion-item.component';

describe('LineaSimulacionItemComponent', () => {
  let component: LineaSimulacionItemComponent;
  let fixture: ComponentFixture<LineaSimulacionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaSimulacionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaSimulacionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
