import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
})
export class SearchBarComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ){}

  buscar(){
    const value = this.txtBuscar.nativeElement.value;

    if (value.trim().length) {
      this.gifsService.findGifs(value);
      this.txtBuscar.nativeElement.value = '';
    }
    
  }
}
