import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl: string = environment.baseUrl + 'images';

  constructor(private http: HttpClient) { }

  createImage(image: Image): Observable<Image> {
    return this.http.post<Image>(this.apiUrl, image);
  }

  getImage(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl);
  }
}
