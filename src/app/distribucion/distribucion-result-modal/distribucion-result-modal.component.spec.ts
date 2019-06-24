import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionResultModalComponent } from './distribucion-result-modal.component';

describe('DistribucionResultModalComponent', () => {
  let component: DistribucionResultModalComponent;
  let fixture: ComponentFixture<DistribucionResultModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionResultModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
