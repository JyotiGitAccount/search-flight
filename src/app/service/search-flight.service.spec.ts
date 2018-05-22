import { TestBed, inject } from '@angular/core/testing';

import { SearchFlightService } from './search-flight.service';

describe('SearchFlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFlightService]
    });
  });

  it('should be created', inject([SearchFlightService], (service: SearchFlightService) => {
    expect(service).toBeTruthy();
  }));
});
