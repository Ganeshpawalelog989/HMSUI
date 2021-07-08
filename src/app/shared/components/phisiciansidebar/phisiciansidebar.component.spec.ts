import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhisiciansidebarComponent } from './phisiciansidebar.component';

describe('PhisiciansidebarComponent', () => {
  let component: PhisiciansidebarComponent;
  let fixture: ComponentFixture<PhisiciansidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhisiciansidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhisiciansidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
