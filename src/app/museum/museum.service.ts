import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MuseumDetail } from './museum-detail';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  private apiUrl: string = environment.baseUrl + 'museums';

  constructor(private http: HttpClient) { }

  getMuseums(): Observable<MuseumDetail[]> {
    return this.http.get<MuseumDetail[]>(this.apiUrl);

  }
}

