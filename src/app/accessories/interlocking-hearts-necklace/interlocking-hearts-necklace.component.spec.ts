import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlockingHeartsNecklaceComponent } from './interlocking-hearts-necklace.component';

describe('InterlockingHeartsNecklaceComponent', () => {
  let component: InterlockingHeartsNecklaceComponent;
  let fixture: ComponentFixture<InterlockingHeartsNecklaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterlockingHeartsNecklaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterlockingHeartsNecklaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
