import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoframeOfFriendsComponent } from './photoframe-of-friends.component';

describe('PhotoframeOfFriendsComponent', () => {
  let component: PhotoframeOfFriendsComponent;
  let fixture: ComponentFixture<PhotoframeOfFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoframeOfFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoframeOfFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
