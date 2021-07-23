import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesidebarComponent } from './nursesidebar.component';

describe('NursesidebarComponent', () => {
  let component: NursesidebarComponent;
  let fixture: ComponentFixture<NursesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursesidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
