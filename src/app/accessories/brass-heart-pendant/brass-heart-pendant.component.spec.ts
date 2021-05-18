import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrassHeartPendantComponent } from './brass-heart-pendant.component';

describe('BrassHeartPendantComponent', () => {
  let component: BrassHeartPendantComponent;
  let fixture: ComponentFixture<BrassHeartPendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrassHeartPendantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrassHeartPendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
