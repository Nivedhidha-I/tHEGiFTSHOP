import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPhotoCLockComponent } from './birthday-photo-clock.component';

describe('BirthdayPhotoCLockComponent', () => {
  let component: BirthdayPhotoCLockComponent;
  let fixture: ComponentFixture<BirthdayPhotoCLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayPhotoCLockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayPhotoCLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
