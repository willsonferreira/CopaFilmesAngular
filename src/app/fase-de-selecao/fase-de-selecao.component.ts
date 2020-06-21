import { CampeonatoService } from './../core/service/campeonato.service';
import { QuantidadeDeParticipantesPermitidosService } from './../core/service/quantidade-de-participantes-permitidos.service';
import { ResultadoFinalService } from './../core/service/resultado-final.service';
import { FilmesService } from '../core/service/filmes.service';
import { IFilme } from '../core/model/ifilme';
import { IResultadoFinal } from '../core/model/iresultado-final';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

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
  resultadoFinal: IResultadoFinal;
  filme: IFilme;
  titulo: string;
  descricao: string;

  public messageSource = new BehaviorSubject(this.resultadoFinal);
  currentMessage = this.messageSource.asObservable();

  constructor(private filmesService: FilmesService,
              private campeonatoService: CampeonatoService,
              private resultadoFinalService: ResultadoFinalService,
              private quantidadeDeParticipantesPermitidosService: QuantidadeDeParticipantesPermitidosService,
              private router: Router) { }

  ngOnInit(): void {

    this.filmesService.buscar()
    .subscribe(resultadoApi => {
      this.filmesDisponiveis = resultadoApi;
    });

    this.quantidadeDeParticipantesPermitidosService.buscar()
      .then(resultadoApi => {
      this.quantidadeDeFilmesPermitidos = resultadoApi;
      this.descricao = 'Selecione ' + this.quantidadeDeFilmesPermitidos + ' filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.';
    });

    this.totalDeFilmesSelecionados = 0;
    this.isLoadingResults = true;
    this.titulo = 'Fase de seleção';
    this.isLoadingResults = false;
  }

  GerarCampeonato(){
    this.filmesSelecionados = [];
    this.filmesDisponiveis.forEach(element => {
      if (element.selecionado)
      {
        element.selecionado = false;
        this.filmesSelecionados.push(element);
      }
    });
    this.totalDeFilmesSelecionados = 0;
    this.isLoadingResults = true;
    this.campeonatoService.gerar(this.filmesSelecionados)
    .then(resultadoApi => {
      this.resultadoFinal = resultadoApi;
      this.isLoadingResults = false;
      this.resultadoFinalService.atualizarResultado(this.resultadoFinal);
      this.router.navigateByUrl('/resultado-final');
    });
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
  }
}
