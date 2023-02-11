import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  @ViewChild('buscartexto') buscartexto!: ElementRef<HTMLInputElement>

  constructor(
    private gifService: GifService
  ){

  }

  buscar(){
    const valor = this.buscartexto.nativeElement.value
    this.gifService.obtenerGif(valor)
    this.buscartexto.nativeElement.value = ''
  }

}
