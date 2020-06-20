import { IResultadoFinal } from './../model/iresultado-final';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoFinalService {

  private dataSource = new BehaviorSubject<IResultadoFinal>(null);
  serviceData = this.dataSource.asObservable();

  constructor() { }

  atualizarResultado(data: IResultadoFinal) {
    this.dataSource.next(data);
  }
}
