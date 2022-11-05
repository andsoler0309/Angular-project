/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { ArtworkService } from './artwork.service';
import { NgxPaginationModule } from 'ngx-pagination';


describe('Service: Artwork', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [ArtworkService]
    });
  });

  it('should ...', inject([ArtworkService], (service: ArtworkService) => {
    expect(service).toBeTruthy();
  }));

  it('should getArtworks', inject([ArtworkService], (service: ArtworkService) => {
    expect(service.getArtworks()).toBeTruthy();
  }));

  it('should getArtworkDetail', inject([ArtworkService], (service: ArtworkService) => {
    expect(service.getArtworkDetail(1)).toBeTruthy();
  }));

  it('should getMuseumsArtworks', inject([ArtworkService], (service: ArtworkService) => {
    expect(service.getMuseumsArtworks(1)).toBeTruthy();
  }));
});
