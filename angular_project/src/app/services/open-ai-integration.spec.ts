import { TestBed } from '@angular/core/testing';

import { OpenAiIntegration } from './open-ai-integration';

describe('OpenAiIntegration', () => {
  let service: OpenAiIntegration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAiIntegration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
