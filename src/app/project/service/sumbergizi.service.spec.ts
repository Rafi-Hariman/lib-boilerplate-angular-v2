/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SumbergiziService } from './sumbergizi.service';

describe('Service: Sumbergizi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SumbergiziService]
    });
  });

  it('should ...', inject([SumbergiziService], (service: SumbergiziService) => {
    expect(service).toBeTruthy();
  }));
});
