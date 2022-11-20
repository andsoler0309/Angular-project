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

  getUrl(id: number){
    return environment.baseUrl + 'museums/' + id + '/exhibitions';
  }

  createExhibition(exhibition: Exhibition): Observable<Exhibition> {
    return this.http.post<Exhibition>(this.apiUrl, exhibition);
 }

  getExhibitions(id:number): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.getUrl(id));
  }

}
