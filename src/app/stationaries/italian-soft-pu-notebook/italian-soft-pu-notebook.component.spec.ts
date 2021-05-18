import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianSoftPUNotebookComponent } from './italian-soft-pu-notebook.component';

describe('ItalianSoftPUNotebookComponent', () => {
  let component: ItalianSoftPUNotebookComponent;
  let fixture: ComponentFixture<ItalianSoftPUNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItalianSoftPUNotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianSoftPUNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
