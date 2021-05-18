import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelescopeInWoodenBirthdayBoxComponent } from './telescope-in-wooden-birthday-box.component';

describe('TelescopeInWoodenBirthdayBoxComponent', () => {
  let component: TelescopeInWoodenBirthdayBoxComponent;
  let fixture: ComponentFixture<TelescopeInWoodenBirthdayBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelescopeInWoodenBirthdayBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelescopeInWoodenBirthdayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
