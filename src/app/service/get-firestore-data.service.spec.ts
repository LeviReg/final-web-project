import { TestBed } from '@angular/core/testing';

import { GetFirestoreDataService } from './get-firestore-data.service';

describe('GetFirestoreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFirestoreDataService = TestBed.get(GetFirestoreDataService);
    expect(service).toBeTruthy();
  });
});
