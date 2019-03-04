import { TestBed } from '@angular/core/testing';

import { ViasAuthService } from './vias-auth.service';

describe('ViasAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViasAuthService = TestBed.get(ViasAuthService);
    expect(service).toBeTruthy();
  });
});
