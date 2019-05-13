import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(private http: Http) { }

  getResults(query: string, timestamp: string): Promise<Response[]> {
    const apiKey = 'Google_Api_key';
    // TODO: create the url
    const url = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + query + '&timestamp=' + timestamp + '&key=' + apiKey;
    console.log(url);
    return this.http.get(url).toPromise()
      .then(response => response.json() as Response[]);
  }
}
