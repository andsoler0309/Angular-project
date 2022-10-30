import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { TestBed, inject } from '@angular/core/testing';
import { MuseumService } from './museum.service';

describe('MuseumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [MuseumService]
    });
  });

  it('should ...', inject([MuseumService], (service: MuseumService) => {
    expect(service).toBeTruthy();
  }));

});
