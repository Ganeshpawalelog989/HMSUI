import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianMyprofileComponent } from './physician-myprofile.component';

describe('PhysicianMyprofileComponent', () => {
  let component: PhysicianMyprofileComponent;
  let fixture: ComponentFixture<PhysicianMyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianMyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
