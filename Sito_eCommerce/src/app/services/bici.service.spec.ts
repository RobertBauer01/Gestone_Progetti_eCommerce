import { TestBed } from '@angular/core/testing';

import { BiciService } from './bici.service';

describe('BiciService', () => {
  let service: BiciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
