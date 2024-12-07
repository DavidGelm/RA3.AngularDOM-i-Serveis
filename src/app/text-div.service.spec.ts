import { TestBed } from '@angular/core/testing';

import { TextDivService } from './text-div.service';

describe('TextDivService', () => {
  let service: TextDivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextDivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
