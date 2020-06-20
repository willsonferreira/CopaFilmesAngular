import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IFilme } from '../model/ifilme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlFilmes;
  }

  buscar(): Observable<IFilme[]> {
    return this.http.get<IFilme[]>(this.apiUrl).pipe();
  }
}


