import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {


constructor( 
    private gifService: GifsService
){}

query = JSON.parse(localStorage.getItem("historial")!)[0] || "Image" ;

downloadImage(url: string, name: string){
  this.gifService.downloadImage(url, name);
}

get results(){ 
  return this.gifService.results;
}

}
