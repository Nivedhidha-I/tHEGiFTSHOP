import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeacockBlueLeatherJournalComponent } from './peacock-blue-leather-journal.component';

describe('PeacockBlueLeatherJournalComponent', () => {
  let component: PeacockBlueLeatherJournalComponent;
  let fixture: ComponentFixture<PeacockBlueLeatherJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeacockBlueLeatherJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeacockBlueLeatherJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
