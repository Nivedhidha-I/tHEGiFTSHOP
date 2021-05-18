import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianRingNecklaceComponent } from './russian-ring-necklace.component';

describe('RussianRingNecklaceComponent', () => {
  let component: RussianRingNecklaceComponent;
  let fixture: ComponentFixture<RussianRingNecklaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RussianRingNecklaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RussianRingNecklaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
