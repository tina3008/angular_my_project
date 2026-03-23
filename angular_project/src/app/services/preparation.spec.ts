import { TestBed } from '@angular/core/testing';

import { Preparation } from './preparation';

describe('Preparation', () => {
  let service: Preparation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Preparation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
