import { CampeonatoService, IFilme } from './campeonato.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.scss']
})
export class CampeonatoComponent implements OnInit {

  displayedColumns: string[] = [ 'titulo', 'anoLacamento' ];
  dataSource: IFilme[];
  isLoadingResults: boolean;
  totalFilmesSelecionados: number;
  filmesSelecionados: IFilme[];
  filme: IFilme;

  constructor(private campeonatoService: CampeonatoService, private router: Router) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.campeonatoService.buscarFilmes()
    .subscribe(res => {
      this.dataSource = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
