import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartShapedBirthdayFrameComponent } from './heart-shaped-birthday-frame.component';

describe('HeartShapedBirthdayFrameComponent', () => {
  let component: HeartShapedBirthdayFrameComponent;
  let fixture: ComponentFixture<HeartShapedBirthdayFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartShapedBirthdayFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartShapedBirthdayFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
