import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuantidadeDeParticipantesPermitidosService {

  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlQuantidadeDeParticipantesPermitidos;
  }

  buscar(): Promise<number> {
    return this.http.get<number>(this.apiUrl).toPromise();
  }
}
