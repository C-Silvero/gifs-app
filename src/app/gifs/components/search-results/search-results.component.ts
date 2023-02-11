import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent  {



  get historial(){
    return this.gifService.historial
  }

  constructor(
    private gifService: GifService
  ){
    
  }
  
  buscar( item: string){
    this.gifService.obtenerGif(item)    
  }


}
