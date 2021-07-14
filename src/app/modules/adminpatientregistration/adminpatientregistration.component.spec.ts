import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminpatientregistrationComponent } from './adminpatientregistration.component';

describe('AdminpatientregistrationComponent', () => {
  let component: AdminpatientregistrationComponent;
  let fixture: ComponentFixture<AdminpatientregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpatientregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpatientregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
