import { TestBed } from '@angular/core/testing';

import { AllMovieListService } from './all-movie-list.service';

describe('AllMovieListService', () => {
  let service: AllMovieListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMovieListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
