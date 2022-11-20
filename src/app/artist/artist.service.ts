import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artist } from './artist';
import { Movement } from '../movement/movement';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl: string = environment.baseUrl + 'artists';
  private apiUrlMovements: string = environment.baseUrl + 'movements';


  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }

  getMovements(): Observable<Movement[]> {
    return this.http.get<Movement[]>(this.apiUrlMovements);
  }

  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist);
  }

}
