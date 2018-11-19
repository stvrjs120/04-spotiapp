import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer QDwzFr9s-FrRMpQuZoBkiKBwAdnIPi4zAW66-VZC3aR3ye1N_AcCZwypwpFtt7xRNv528tu9KlNxbmnKeE'
    });

    return this._http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`)
      .pipe( map( data => data['albums'].items) );

  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe( map( data => data['artists'].items) );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe( map( data => data['tracks']) );
  }
}
