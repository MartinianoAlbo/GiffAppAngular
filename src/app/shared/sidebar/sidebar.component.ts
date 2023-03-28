import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {

  get history(){
    
    return this.gifsServices.history;
  }

  buscar(value: string){
    this.gifsServices.findGifs(value);
  }
  
  constructor( private gifsServices: GifsService ){}

}
