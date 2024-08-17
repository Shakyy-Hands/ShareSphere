import { TestBed } from '@angular/core/testing';

import { GetPageService } from './get-page.service';

describe('GetPageService', () => {
  let service: GetPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
