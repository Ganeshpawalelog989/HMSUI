import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationmasterformComponent } from './medicationmasterform.component';

describe('MedicationmasterformComponent', () => {
  let component: MedicationmasterformComponent;
  let fixture: ComponentFixture<MedicationmasterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationmasterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationmasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
