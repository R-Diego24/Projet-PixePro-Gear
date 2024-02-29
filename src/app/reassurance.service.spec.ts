import { TestBed } from '@angular/core/testing';

import { ReassuranceService } from './reassurance.service';

describe('ReassuranceService', () => {
  let service: ReassuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReassuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
