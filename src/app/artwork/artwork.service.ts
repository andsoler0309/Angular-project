import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artwork } from './artwork';
import { ArtworkDetail } from './artwork-detail';



@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl: string = environment.baseUrl + 'artworks';
  constructor(private http: HttpClient) { }

  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrl);
  }

  getArtworkDetail(artworkId: number): Observable<ArtworkDetail> {
    return this.http.get<ArtworkDetail>(this.apiUrl + '/' + artworkId);
  }

  getMuseumsArtworks(museumId: number): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(environment.baseUrl + 'museums/' + museumId + '/artworks');
  }

  createArtwork(artwork: Artwork): Observable<Artwork> {
    return this.http.post<Artwork>(this.apiUrl, artwork);
  }
}
