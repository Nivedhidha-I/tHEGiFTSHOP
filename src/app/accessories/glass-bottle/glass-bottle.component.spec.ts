import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassBottleComponent } from './glass-bottle.component';

describe('GlassBottleComponent', () => {
  let component: GlassBottleComponent;
  let fixture: ComponentFixture<GlassBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassBottleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
