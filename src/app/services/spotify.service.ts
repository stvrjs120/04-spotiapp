import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDL-tfVZstwG3XO9eVPZqBcttB-b9apE3gtA3VE1AQAejzfQI2FS5AVGJBqT614lx3bkHGxdRYV-hJO3bQ'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe( map( data => data['albums'].items) );

  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDL-tfVZstwG3XO9eVPZqBcttB-b9apE3gtA3VE1AQAejzfQI2FS5AVGJBqT614lx3bkHGxdRYV-hJO3bQ'
    });

    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})
    .pipe( map( data => data['artists'].items) );
  }
}
