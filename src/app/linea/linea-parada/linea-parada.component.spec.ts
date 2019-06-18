import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaParadaComponent } from './linea-parada.component';

describe('LineaParadaComponent', () => {
  let component: LineaParadaComponent;
  let fixture: ComponentFixture<LineaParadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaParadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
