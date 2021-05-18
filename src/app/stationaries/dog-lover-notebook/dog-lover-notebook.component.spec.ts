import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogLoverNotebookComponent } from './dog-lover-notebook.component';

describe('DogLoverNotebookComponent', () => {
  let component: DogLoverNotebookComponent;
  let fixture: ComponentFixture<DogLoverNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogLoverNotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogLoverNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
