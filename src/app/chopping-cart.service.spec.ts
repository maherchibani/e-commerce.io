import { TestBed, inject } from '@angular/core/testing';

import { ChoppingCartService } from './chopping-cart.service';

describe('ChoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoppingCartService]
    });
  });

  it('should be created', inject([ChoppingCartService], (service: ChoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});
