import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent  {


  get resultados(){
    return this.gifService.gifs
  }

  constructor(
    private gifService: GifService
  ){
    
  }


}
