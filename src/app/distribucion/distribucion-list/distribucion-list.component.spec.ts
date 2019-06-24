import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionListComponent } from './distribucion-list.component';

describe('DistribucionListComponent', () => {
  let component: DistribucionListComponent;
  let fixture: ComponentFixture<DistribucionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
