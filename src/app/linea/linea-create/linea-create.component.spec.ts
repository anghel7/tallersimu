import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaCreateComponent } from './linea-create.component';

describe('LineaCreateComponent', () => {
  let component: LineaCreateComponent;
  let fixture: ComponentFixture<LineaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
