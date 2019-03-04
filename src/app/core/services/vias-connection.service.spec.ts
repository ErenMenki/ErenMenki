import { TestBed } from '@angular/core/testing';

import { ViasConnectionService } from './vias-connection.service';

describe('ViasConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViasConnectionService = TestBed.get(ViasConnectionService);
    expect(service).toBeTruthy();
  });
});
