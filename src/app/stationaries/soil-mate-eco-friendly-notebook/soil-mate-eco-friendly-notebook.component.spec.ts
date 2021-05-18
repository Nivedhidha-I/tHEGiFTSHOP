import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilMateEcoFriendlyNotebookComponent } from './soil-mate-eco-friendly-notebook.component';

describe('SoilMateEcoFriendlyNotebookComponent', () => {
  let component: SoilMateEcoFriendlyNotebookComponent;
  let fixture: ComponentFixture<SoilMateEcoFriendlyNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilMateEcoFriendlyNotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilMateEcoFriendlyNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
