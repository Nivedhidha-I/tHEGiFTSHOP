import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailArtNamePlateComponent } from './nail-art-name-plate.component';

describe('NailArtNamePlateComponent', () => {
  let component: NailArtNamePlateComponent;
  let fixture: ComponentFixture<NailArtNamePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailArtNamePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NailArtNamePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
