import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Gifs } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(
    private http: HttpClient
  ){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('resultado')!) || [];
  }
  
  public favorites: string[] = [];
  public resultados: Data[] = [];
  public gifs: Data[] = [];
  private apiUrl: string = 'https://api.giphy.com/v1/gifs/search';
  private apiKey: string = 'SNkk9ZuK78RqrEOI9vqpj0V1QJAWlmQ8';
  private _historial: string[] = [];

  
  get historial() {
    return [...this._historial]
  }



  obtenerGif( query: string) {

    query = query.trim().toLowerCase()
    this._historial = this._historial.splice(0,4)
  

    if (!this._historial.includes(query)){
      this._historial.unshift(query)
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
  
    this.http.get<Gifs>(`${this.apiUrl}?api_key=${this.apiKey}&q=${query}&limit=40`)
    .subscribe( (resp) => {
      this.gifs = resp.data
      localStorage.setItem('resultado', JSON.stringify(this.gifs))
    })
  }

  

}
