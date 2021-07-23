import { TestBed } from '@angular/core/testing';

import { AdminmasterdataService } from './adminmasterdata.service';

describe('AdminmasterdataService', () => {
  let service: AdminmasterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminmasterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
