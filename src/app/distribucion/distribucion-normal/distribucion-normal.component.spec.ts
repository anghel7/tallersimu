import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionNormalComponent } from './distribucion-normal.component';

describe('DistribucionNormalComponent', () => {
  let component: DistribucionNormalComponent;
  let fixture: ComponentFixture<DistribucionNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
