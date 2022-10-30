import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Exhibition } from '../exhibition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private currentMuseumID:number = 102;
  private apiUrl: string = environment.baseUrl + 'museums/' + this.currentMuseumID + '/exhibitions';

  constructor(private http: HttpClient) { }

  getExhibitions(): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.apiUrl);
  }

}
