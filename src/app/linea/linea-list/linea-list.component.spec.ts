import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaListComponent } from './linea-list.component';

describe('LineaListComponent', () => {
  let component: LineaListComponent;
  let fixture: ComponentFixture<LineaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
