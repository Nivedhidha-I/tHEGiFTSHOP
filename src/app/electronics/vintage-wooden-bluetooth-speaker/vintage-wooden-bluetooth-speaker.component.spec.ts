import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintageWoodenBluetoothSpeakerComponent } from './vintage-wooden-bluetooth-speaker.component';

describe('VintageWoodenBluetoothSpeakerComponent', () => {
  let component: VintageWoodenBluetoothSpeakerComponent;
  let fixture: ComponentFixture<VintageWoodenBluetoothSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VintageWoodenBluetoothSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VintageWoodenBluetoothSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
