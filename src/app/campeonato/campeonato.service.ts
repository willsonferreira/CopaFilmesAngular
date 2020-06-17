import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const apiUrl = 'https://willson-copa-filmes-api.herokuapp.com/filme/';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private http: HttpClient) { }

  buscarFilmes(): Observable<IFilme[]> {
    return this.http.get<IFilme[]>(apiUrl)
      .pipe(
        tap(filmes=>console.log('buscou os filmes'),
        catchError(this.handleError('buscarFilmes'))
      ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}

interface IFilme{
    id: string;
    titulo: string;
    nota: number;
    anoLancamento: string;
    selecionado: boolean;
}
