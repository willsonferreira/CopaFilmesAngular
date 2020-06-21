import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilme } from '../model/ifilme';
import { IResultadoFinal } from '../model/iresultado-final';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlCampeonato;
  }

  gerar(filmes: IFilme[]): Promise<IResultadoFinal>{
    return this.http.post<IResultadoFinal>(this.apiUrl, filmes).toPromise();
  }
}
