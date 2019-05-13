import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeocodingService } from '../geocoding.service';
import { TimezoneService} from '../timezone.service';
import { Geolocation } from '../geolocation';

@Component({
  selector: 'app-map-form',
  templateUrl: './map-form.component.html',
  styleUrls: ['./map-form.component.css']
})
export class MapFormComponent implements OnInit {
  public latLng: Geolocation;
  public timezone: any;
  public querying = false;
  constructor(private geocodingService: GeocodingService, private timezoneService : TimezoneService) { }

  ngOnInit() {

  }
  handleSubmit(search: NgForm) {
    this.querying = true;
    const query = search.value.query;
    console.log(query);
    this.geocodingService.getResults(query).then((response) => {
//      console.log(response['results'][0].geometry.location);
      this.latLng = response['results'][0].geometry.location;
      console.log(this.latLng);
      this.querying = false;

      const location = this.latLng.lat + ',' + this.latLng.lng;
      console.log(new Date().getTime());
      console.log(Math.round(new Date().getTime() / 1000));
      const timestamp2 = Math.round(new Date().getTime() / 1000).toString();
      this.timezoneService.getResults(location, timestamp2 ).then( (response2) => {
        console.log(response2['timeZoneName']);
        this.timezone = response2['timeZoneName'];
      });
    });
  }
}
