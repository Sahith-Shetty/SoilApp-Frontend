import { TestBed } from '@angular/core/testing';

import { SoildataService } from './soildata.service';

describe('SoildataService', () => {
  let service: SoildataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoildataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
