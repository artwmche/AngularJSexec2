import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: Http) { }

  getResults(query: string): Promise<Response[]> {
    const apiKey = 'Google_Api_key';
    // TODO: create the url
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + query + '&key=' + apiKey;
    console.log(url);
    return this.http.get(url).toPromise()
      .then(response => response.json() as Response[]);
  }
}
