import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCanvasPhotoframeComponent } from './mini-canvas-photoframe.component';

describe('MiniCanvasPhotoframeComponent', () => {
  let component: MiniCanvasPhotoframeComponent;
  let fixture: ComponentFixture<MiniCanvasPhotoframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCanvasPhotoframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCanvasPhotoframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
