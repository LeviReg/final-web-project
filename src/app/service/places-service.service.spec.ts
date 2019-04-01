import { TestBed } from '@angular/core/testing';

import { PlacesServiceService } from './places-service.service';

describe('PlacesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacesServiceService = TestBed.get(PlacesServiceService);
    expect(service).toBeTruthy();
  });
});
