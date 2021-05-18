import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinnedTeddyBearComponent } from './tinned-teddy-bear.component';

describe('TinnedTeddyBearComponent', () => {
  let component: TinnedTeddyBearComponent;
  let fixture: ComponentFixture<TinnedTeddyBearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinnedTeddyBearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinnedTeddyBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
