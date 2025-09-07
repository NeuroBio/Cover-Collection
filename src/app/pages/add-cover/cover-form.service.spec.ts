import { TestBed } from '@angular/core/testing';

import { CoverFormService } from './cover-form.service';

describe('AddCoverService', () => {
  let service: CoverFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
