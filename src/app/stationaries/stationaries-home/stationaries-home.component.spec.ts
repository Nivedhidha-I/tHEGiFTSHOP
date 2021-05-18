import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationariesHomeComponent } from './stationaries-home.component';

describe('StationariesHomeComponent', () => {
  let component: StationariesHomeComponent;
  let fixture: ComponentFixture<StationariesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationariesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationariesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
