import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostipaluserRegistrationComponent } from './hostipaluser-registration.component';

describe('HostipaluserRegistrationComponent', () => {
  let component: HostipaluserRegistrationComponent;
  let fixture: ComponentFixture<HostipaluserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostipaluserRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostipaluserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
