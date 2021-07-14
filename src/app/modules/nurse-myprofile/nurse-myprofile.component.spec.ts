import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseMyprofileComponent } from './nurse-myprofile.component';

describe('NurseMyprofileComponent', () => {
  let component: NurseMyprofileComponent;
  let fixture: ComponentFixture<NurseMyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseMyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
