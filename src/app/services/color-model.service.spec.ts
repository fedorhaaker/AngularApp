import { TestBed } from '@angular/core/testing';

import { ColorModelService } from './color-model.service';

describe('ColorModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorModelService = TestBed.get(ColorModelService);
    expect(service).toBeTruthy();
  });
});
