import { TestBed, inject } from '@angular/core/testing';

import { ZyService } from './zy.service';

describe('ZyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZyService]
    });
  });

  it('should be created', inject([ZyService], (service: ZyService) => {
    expect(service).toBeTruthy();
  }));
});
