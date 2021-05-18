import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenDeskOrganizerComponent } from './wooden-desk-organizer.component';

describe('WoodenDeskOrganizerComponent', () => {
  let component: WoodenDeskOrganizerComponent;
  let fixture: ComponentFixture<WoodenDeskOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenDeskOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenDeskOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
