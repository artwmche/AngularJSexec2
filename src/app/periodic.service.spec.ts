import { TestBed, inject } from '@angular/core/testing';

import { PeriodicService } from './periodic.service';

describe('PeriodicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodicService]
    });
  });

  it('should be created', inject([PeriodicService], (service: PeriodicService) => {
    expect(service).toBeTruthy();
  }));
});
