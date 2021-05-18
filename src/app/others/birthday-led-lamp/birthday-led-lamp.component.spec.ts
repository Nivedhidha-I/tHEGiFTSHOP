import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayLEDLampComponent } from './birthday-led-lamp.component';

describe('BirthdayLEDLampComponent', () => {
  let component: BirthdayLEDLampComponent;
  let fixture: ComponentFixture<BirthdayLEDLampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayLEDLampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayLEDLampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
