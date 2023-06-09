import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SearchBarComponent } from './search-bar/searchBar.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultadosComponent,
    SearchBarComponent
  ],
  exports: [
    GifsPageComponent,
    SearchBarComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
