import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallHangingsHomeComponent } from './wall-hangings-home.component';

describe('WallHangingsHomeComponent', () => {
  let component: WallHangingsHomeComponent;
  let fixture: ComponentFixture<WallHangingsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallHangingsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallHangingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
