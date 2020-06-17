import { CampeonatoComponent } from './campeonato/campeonato.component';
import { ResultadoComponent } from './resultado/resultado.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
[
  {
    path: 'campeonato',
    component: CampeonatoComponent,
    data: { title: 'Campeonato' }
  },
  {
    path: 'resultado',
    component: ResultadoComponent,
    data: { title: 'Resultado' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
