import { FilmesService } from '../core/service/filmes.service';
import { IFilme } from '../core/model/ifilme';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campeonato',
  templateUrl: './fase-de-selecao.component.html',
  styleUrls: ['./fase-de-selecao.component.scss']
})
export class FaseDeSelecaoComponent implements OnInit {

  displayedColumns: string[] = [ 'titulo', 'anoLacamento' ];
  filmesDisponiveis: IFilme[];
  isLoadingResults: boolean;
  quantidadeDeFilmesPermitidos: number;
  totalDeFilmesSelecionados: number;
  filmesSelecionados: IFilme[];
  filme: IFilme;
  titulo: string;
  descricao: string;
  constructor(private campeonatoService: FilmesService, private router: Router) { }

  ngOnInit(): void {
    this.totalDeFilmesSelecionados = 0;
    this.quantidadeDeFilmesPermitidos = 8;
    this.isLoadingResults = true;
    this.titulo = 'Fase de seleção';
    this.descricao = 'Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.';

    this.campeonatoService.buscar()
    .subscribe(resultadoApi => {
      this.filmesDisponiveis = resultadoApi;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  GerarCampeonato(){

  }

  IncluirRemoverFilme(filme: IFilme) {
    if (this.totalDeFilmesSelecionados < this.quantidadeDeFilmesPermitidos || filme.selecionado)
    {
      filme.selecionado = !filme.selecionado;

      if (filme.selecionado){
        this.totalDeFilmesSelecionados++;
      }
      else{
        this.totalDeFilmesSelecionados--;
      }
    }

    console.log(filme);
  }
}
