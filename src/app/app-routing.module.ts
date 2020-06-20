import { FaseDeSelecaoComponent } from './fase-de-selecao/fase-de-selecao.component';
import { ResultadoFinalComponent } from './resultado-final/resultado-final.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
[
  {
    path: 'fase-de-selecao',
    component: FaseDeSelecaoComponent,
    data: { title: 'Fase de Seleção' }
  },
  {
    path: 'resultado-final',
    component: ResultadoFinalComponent,
    data: { title: 'Resultado' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
