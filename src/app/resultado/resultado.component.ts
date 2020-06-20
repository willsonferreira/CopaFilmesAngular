import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  titulo: string;
  descricao: string;

  constructor() {
    this.titulo = 'Resultado Final';
    this.descricao = 'Veja o resultado final do campeonato de forma simples e rapida rápida.';

  }

  ngOnInit(): void {
  }

}
