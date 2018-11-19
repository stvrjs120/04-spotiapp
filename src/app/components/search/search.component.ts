import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  loading: boolean;
  artistas: any[] = [];
  constructor(private _spotify: SpotifyService) {}

  buscar(termino: string) {
    
    this._spotify.getArtistas(termino)
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
