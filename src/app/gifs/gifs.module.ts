import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifComponent } from './components/gif/gif.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    GifComponent,
    BuscadorComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    GifComponent
  ]
})
export class GifsModule { }
