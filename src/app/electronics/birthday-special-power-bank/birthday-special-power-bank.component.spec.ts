import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaySpecialPowerBankComponent } from './birthday-special-power-bank.component';

describe('BirthdaySpecialPowerBankComponent', () => {
  let component: BirthdaySpecialPowerBankComponent;
  let fixture: ComponentFixture<BirthdaySpecialPowerBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdaySpecialPowerBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaySpecialPowerBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
