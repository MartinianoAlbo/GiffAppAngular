import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

public query = "";

constructor( private gifService: GifsService ){

  if (localStorage.getItem("historial")) {
   const queryValue: string = !JSON.parse(localStorage.getItem("historial")!)[0] ? "Image" : JSON.parse(localStorage.getItem("historial")!)[0];
   this.query = queryValue;
 }
}


downloadImage(url: string, name: string){
  this.gifService.downloadImage(url, name);
}

get results(){ 
  return this.gifService.results;
}

}
