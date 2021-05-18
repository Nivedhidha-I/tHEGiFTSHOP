import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallHangingsComponent } from './wall-hangings.component';

describe('WallHangingsComponent', () => {
  let component: WallHangingsComponent;
  let fixture: ComponentFixture<WallHangingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallHangingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallHangingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
