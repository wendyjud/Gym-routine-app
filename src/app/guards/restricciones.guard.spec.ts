import { TestBed } from '@angular/core/testing';

import { RestriccionesGuard } from './restricciones.guard';

describe('RestriccionesGuard', () => {
  let guard: RestriccionesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestriccionesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
