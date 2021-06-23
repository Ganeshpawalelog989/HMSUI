import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerencyInfoComponent } from './emerency-info.component';

describe('EmerencyInfoComponent', () => {
  let component: EmerencyInfoComponent;
  let fixture: ComponentFixture<EmerencyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerencyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerencyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
