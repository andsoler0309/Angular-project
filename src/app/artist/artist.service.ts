import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl: string = environment.baseUrl + 'artists';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }
}
