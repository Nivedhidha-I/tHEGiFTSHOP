import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiringPowerBankComponent } from './inspiring-power-bank.component';

describe('InspiringPowerBankComponent', () => {
  let component: InspiringPowerBankComponent;
  let fixture: ComponentFixture<InspiringPowerBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspiringPowerBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiringPowerBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
