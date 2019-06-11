import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaEditComponent } from './linea-edit.component';

describe('LineaEditComponent', () => {
  let component: LineaEditComponent;
  let fixture: ComponentFixture<LineaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
