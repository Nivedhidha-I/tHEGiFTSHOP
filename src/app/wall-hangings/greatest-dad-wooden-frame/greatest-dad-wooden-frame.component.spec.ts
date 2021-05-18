import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatestDadWoodenFrameComponent } from './greatest-dad-wooden-frame.component';

describe('GreatestDadWoodenFrameComponent', () => {
  let component: GreatestDadWoodenFrameComponent;
  let fixture: ComponentFixture<GreatestDadWoodenFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatestDadWoodenFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatestDadWoodenFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
