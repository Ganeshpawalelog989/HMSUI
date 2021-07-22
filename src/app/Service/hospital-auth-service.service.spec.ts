import { TestBed } from '@angular/core/testing';

import { HospitalAuthServiceService } from './hospital-auth-service.service';

describe('HospitalAuthServiceService', () => {
  let service: HospitalAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
