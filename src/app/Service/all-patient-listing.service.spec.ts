import { TestBed } from '@angular/core/testing';

import { AllPatientListingService } from './all-patient-listing.service';

describe('AllPatientListingService', () => {
  let service: AllPatientListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPatientListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
