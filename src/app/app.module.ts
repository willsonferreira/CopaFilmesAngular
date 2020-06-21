import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './core/component/menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FaseDeSelecaoComponent } from './fase-de-selecao/fase-de-selecao.component';
import { ResultadoFinalComponent } from './resultado-final/resultado-final.component';
import { TopoComponent } from './core/component/topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FaseDeSelecaoComponent,
    ResultadoFinalComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
