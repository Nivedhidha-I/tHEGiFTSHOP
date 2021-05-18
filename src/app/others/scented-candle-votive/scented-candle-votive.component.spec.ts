import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScentedCandleVotiveComponent } from './scented-candle-votive.component';

describe('ScentedCandleVotiveComponent', () => {
  let component: ScentedCandleVotiveComponent;
  let fixture: ComponentFixture<ScentedCandleVotiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScentedCandleVotiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScentedCandleVotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
