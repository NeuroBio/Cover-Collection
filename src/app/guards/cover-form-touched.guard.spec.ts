import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { coverFormTouchedGuard } from './cover-form-touched.guard';

describe('coverFormTouchedGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => coverFormTouchedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
