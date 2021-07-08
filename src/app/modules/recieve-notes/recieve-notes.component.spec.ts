import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveNotesComponent } from './recieve-notes.component';

describe('RecieveNotesComponent', () => {
  let component: RecieveNotesComponent;
  let fixture: ComponentFixture<RecieveNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieveNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
