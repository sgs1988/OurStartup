import { TestBed } from '@angular/core/testing';

import { HttpError.HandlerService } from './http-error.handler.service';

describe('HttpError.HandlerService', () => {
  let service: HttpError.HandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpError.HandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
