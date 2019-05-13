import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PeriodicService {

  constructor(private http: Http) { }

  getElements(): Promise<Response[]> {
    // return data in a particalar format
    const url = 'http://167.99.184.138/periodic.json';
    return this.http.get(url).toPromise().then(response => response.json() as Response[]);
  }
}
