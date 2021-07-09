import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurselayoutComponent } from './nurselayout.component';

describe('NurselayoutComponent', () => {
  let component: NurselayoutComponent;
  let fixture: ComponentFixture<NurselayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurselayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurselayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
