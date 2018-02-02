import { TestBed, inject } from '@angular/core/testing';

import { FilelistService } from './filelist.service';

describe('FilelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilelistService]
    });
  });

  it('should be created', inject([FilelistService], (service: FilelistService) => {
    expect(service).toBeTruthy();
  }));
});
