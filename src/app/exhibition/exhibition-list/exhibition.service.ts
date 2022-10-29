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
  private name:string = '';
  private description:string = '';
  private apiUrl: string = environment.baseUrl + 'museums/' + this.currentMuseumID + '/exhibitions';

  constructor(private http: HttpClient) { }

  getExhibitions(): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.apiUrl);
  }

  changeName(name:string){
    this.name = name;
  }

  changeDescription(description:string){
    this.description = description;
  }

  getName(){
    return this.name;
  }

  getDescription(){
    return this.description;
  }

}
