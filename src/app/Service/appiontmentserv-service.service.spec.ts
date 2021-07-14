import { TestBed } from '@angular/core/testing';

import { AppiontmentservServiceService } from './appiontmentserv-service.service';

describe('AppiontmentservServiceService', () => {
  let service: AppiontmentservServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiontmentservServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
