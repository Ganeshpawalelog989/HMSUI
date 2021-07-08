import { TestBed } from '@angular/core/testing';

import { BackednInterceptorInterceptor } from './backedn-interceptor.interceptor';

describe('BackednInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BackednInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BackednInterceptorInterceptor = TestBed.inject(BackednInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
