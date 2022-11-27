import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artist } from './artist';
import { Movement } from '../movement/movement';
import { Image } from '../image/image';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl: string = environment.baseUrl + 'artists';
  private apiUrlImages: string = environment.baseUrl + 'images';


  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrlImages);
  }

  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist);
  }

}
