import { TestBed } from '@angular/core/testing';

import { DistritosService } from './distritos.service';

describe('DistritosService', () => {
  let service: DistritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
