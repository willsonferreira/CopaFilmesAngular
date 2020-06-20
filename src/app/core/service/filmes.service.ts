import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { IFilme } from '../model/ifilme';

const apiUrl = 'https://willson-copa-filmes-api.herokuapp.com/filme/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  buscar(): Observable<IFilme[]> {
    return this.http.get<IFilme[]>(apiUrl)
      .pipe(
        tap(filmes => catchError(this.handleError('buscarFilmes'))
      ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}


