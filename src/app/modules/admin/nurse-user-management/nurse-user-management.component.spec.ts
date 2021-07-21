import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseUserManagementComponent } from './nurse-user-management.component';

describe('NurseUserManagementComponent', () => {
  let component: NurseUserManagementComponent;
  let fixture: ComponentFixture<NurseUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseUserManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
