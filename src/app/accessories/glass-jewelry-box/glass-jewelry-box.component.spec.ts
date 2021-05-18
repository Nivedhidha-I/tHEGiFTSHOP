import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassJewelryBoxComponent } from './glass-jewelry-box.component';

describe('GlassJewelryBoxComponent', () => {
  let component: GlassJewelryBoxComponent;
  let fixture: ComponentFixture<GlassJewelryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassJewelryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassJewelryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
