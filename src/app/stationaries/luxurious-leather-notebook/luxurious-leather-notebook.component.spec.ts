import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuriousLeatherNotebookComponent } from './luxurious-leather-notebook.component';

describe('LuxuriousLeatherNotebookComponent', () => {
  let component: LuxuriousLeatherNotebookComponent;
  let fixture: ComponentFixture<LuxuriousLeatherNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuriousLeatherNotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuriousLeatherNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
