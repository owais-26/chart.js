import { TestBed } from '@angular/core/testing';

import { CubejsService } from './cubejs.service';

describe('CubejsService', () => {
  let service: CubejsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubejsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
