import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsHomeComponent } from './electronics-home.component';

describe('ElectronicsHomeComponent', () => {
  let component: ElectronicsHomeComponent;
  let fixture: ComponentFixture<ElectronicsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
