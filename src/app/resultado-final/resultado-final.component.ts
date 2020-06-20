import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.scss']
})
export class ResultadoFinalComponent implements OnInit {

  titulo: string;
  descricao: string;

  constructor() {
    this.titulo = 'Resultado Final';
    this.descricao = 'Veja o resultado final do campeonato de forma simples e rapida rápida.';
  }

  ngOnInit(): void {
  }

}
