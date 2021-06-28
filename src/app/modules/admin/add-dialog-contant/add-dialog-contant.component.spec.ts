import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogContantComponent } from './add-dialog-contant.component';

describe('AddDialogContantComponent', () => {
  let component: AddDialogContantComponent;
  let fixture: ComponentFixture<AddDialogContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogContantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
