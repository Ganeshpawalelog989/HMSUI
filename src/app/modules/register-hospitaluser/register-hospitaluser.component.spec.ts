import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHospitaluserComponent } from './register-hospitaluser.component';

describe('RegisterHospitaluserComponent', () => {
  let component: RegisterHospitaluserComponent;
  let fixture: ComponentFixture<RegisterHospitaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHospitaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHospitaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
