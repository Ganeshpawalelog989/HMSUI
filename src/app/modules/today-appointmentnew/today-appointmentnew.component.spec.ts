import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayAppointmentnewComponent } from './today-appointmentnew.component';

describe('TodayAppointmentnewComponent', () => {
  let component: TodayAppointmentnewComponent;
  let fixture: ComponentFixture<TodayAppointmentnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayAppointmentnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayAppointmentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
