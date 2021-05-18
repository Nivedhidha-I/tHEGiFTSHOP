import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationariesComponent } from './stationaries.component';

describe('StationariesComponent', () => {
  let component: StationariesComponent;
  let fixture: ComponentFixture<StationariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
