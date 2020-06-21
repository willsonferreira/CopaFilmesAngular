import { IResultadoFinal } from './../core/model/iresultado-final';
import { ResultadoFinalService } from './../core/service/resultado-final.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.scss']
})
export class ResultadoFinalComponent implements OnInit {

  titulo: string;
  descricao: string;
  resultadoFinal: IResultadoFinal;
  temResultado: boolean;

  constructor(private resultadoFinalService: ResultadoFinalService) {
    this.titulo = 'Resultado Final';
    this.descricao = 'Veja o resultado final do campeonato de forma simples e rapida rápida.';
  }

  ngOnInit(): void {
    this.resultadoFinalService.serviceData.subscribe(data => this.resultadoFinal = data);
    this.temResultado = this.resultadoFinal != null && this.resultadoFinal.campeao != null && this.resultadoFinal.viceCampeao != null;
  }

}
