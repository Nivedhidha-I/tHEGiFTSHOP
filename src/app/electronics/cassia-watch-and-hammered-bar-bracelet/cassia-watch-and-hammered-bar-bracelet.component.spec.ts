import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassiaWatchAndHammeredBarBraceletComponent } from './cassia-watch-and-hammered-bar-bracelet.component';

describe('CassiaWatchAndHammeredBarBraceletComponent', () => {
  let component: CassiaWatchAndHammeredBarBraceletComponent;
  let fixture: ComponentFixture<CassiaWatchAndHammeredBarBraceletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CassiaWatchAndHammeredBarBraceletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CassiaWatchAndHammeredBarBraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
