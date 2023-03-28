import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, DataImage } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history:string[] = [];
  private apiKey: string = "qJ0wo4Fc6iy7wd4PxJLP4PLdL3UaiYZz";
  private baseURL: string = `https://api.giphy.com/v1/gifs`;

  public results: Data[] = [];

  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient ) {

    this._history = JSON.parse(localStorage.getItem("historial")!) || [];
    this.results =  JSON.parse(localStorage.getItem("results")!) || [];
   
  }

  findGifs( query: string ){
    if ( !this._history.includes( query ) ) {
      this._history.unshift( query );
      this._history = this._history.splice( 0, 10 );

      localStorage.setItem("historial", JSON.stringify( this._history ));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 20)
    .set('q', query);
    
    

    this.http.get<DataImage>(`${this.baseURL}/search`, { params } )
    .subscribe( ( resp ) =>{ 
      // console.log(resp);
      this.results = resp.data;
      localStorage.setItem("results", JSON.stringify( this.results ));

    });
     
  }

  downloadImage( url: string, name:string ) {

    this.http.get(url, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'image.png';
      link.click();
      window.URL.revokeObjectURL(link.href);
    });
  }
  

}
