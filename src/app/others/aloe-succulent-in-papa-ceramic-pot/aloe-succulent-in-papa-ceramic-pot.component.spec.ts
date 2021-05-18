import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloeSucculentInPapaCeramicPotComponent } from './aloe-succulent-in-papa-ceramic-pot.component';

describe('AloeSucculentInPapaCeramicPotComponent', () => {
  let component: AloeSucculentInPapaCeramicPotComponent;
  let fixture: ComponentFixture<AloeSucculentInPapaCeramicPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloeSucculentInPapaCeramicPotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloeSucculentInPapaCeramicPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
