import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUserShedulingComponent } from './patient-user-sheduling.component';

describe('PatientUserShedulingComponent', () => {
  let component: PatientUserShedulingComponent;
  let fixture: ComponentFixture<PatientUserShedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientUserShedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientUserShedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
