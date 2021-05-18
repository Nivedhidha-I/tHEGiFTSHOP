import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoFriendlyDiaryWithWoodenBookmarksComponent } from './eco-friendly-diary-with-wooden-bookmarks.component';

describe('EcoFriendlyDiaryWithWoodenBookmarksComponent', () => {
  let component: EcoFriendlyDiaryWithWoodenBookmarksComponent;
  let fixture: ComponentFixture<EcoFriendlyDiaryWithWoodenBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoFriendlyDiaryWithWoodenBookmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoFriendlyDiaryWithWoodenBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
