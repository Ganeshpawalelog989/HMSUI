import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsidebarComponent } from './patientsidebar.component';

describe('PatientsidebarComponent', () => {
  let component: PatientsidebarComponent;
  let fixture: ComponentFixture<PatientsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
