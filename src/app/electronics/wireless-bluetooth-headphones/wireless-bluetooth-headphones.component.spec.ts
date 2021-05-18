import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessBluetoothHeadphonesComponent } from './wireless-bluetooth-headphones.component';

describe('WirelessBluetoothHeadphonesComponent', () => {
  let component: WirelessBluetoothHeadphonesComponent;
  let fixture: ComponentFixture<WirelessBluetoothHeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessBluetoothHeadphonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessBluetoothHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
