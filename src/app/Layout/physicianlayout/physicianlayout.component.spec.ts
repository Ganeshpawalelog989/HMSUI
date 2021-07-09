import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianlayoutComponent } from './physicianlayout.component';

describe('PhysicianlayoutComponent', () => {
  let component: PhysicianlayoutComponent;
  let fixture: ComponentFixture<PhysicianlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
