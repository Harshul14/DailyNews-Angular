import { TestBed } from '@angular/core/testing';

import { DailynewsapiService } from './dailynewsapi.service';

describe('DailynewsapiService', () => {
  let service: DailynewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailynewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
