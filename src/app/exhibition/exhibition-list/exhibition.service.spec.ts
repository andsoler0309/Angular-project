/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ExhibitionService } from './exhibition.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Exhibition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExhibitionService]
    });
  });

  it('should ...', inject([ExhibitionService], (service: ExhibitionService) => {
    expect(service).toBeTruthy();
  }));
});
