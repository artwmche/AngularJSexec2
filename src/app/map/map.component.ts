import {
  Component,
  OnInit,
  Renderer2,
  Input,
  ElementRef
} from '@angular/core';
import { Geolocation } from '../geolocation';
declare const google: any; // any type in Typescript is a catch-all

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  // Create map div (document.getElementById('map'))
  public mapDiv = this.renderer.createElement('div');
  public mapCenter: Geolocation;

  @Input() set latLng(latLngCaptured: Geolocation) {
    this.mapCenter = latLngCaptured;
    this.renderMap(this.mapCenter);
  }

  renderMap(latLng: Geolocation) {
    this.renderer.setStyle(this.mapDiv, 'width', '100%');
    this.renderer.setStyle(this.mapDiv, 'height', '700px');
    let location;
    if (latLng) {
      location = latLng;
    } else {
      location = {lat: 43.653226, lng: -79.3831843};
    }

    // Turn our div into a google map
    const map = new google.maps.Map(this.mapDiv, {
      center: location,
      zoom: 15
    });
    const centerMarker = new google.maps.Marker({
      position: location,
      map: map
    });
    const infoWindow = new google.maps.InfoWindow({
      content: '<strong>Hello</strong> People!'
    });
    centerMarker.addListener('click', function () {
      infoWindow.open(map, centerMarker);
    });

    this.el.nativeElement.appendChild(this.mapDiv);
  }

  ngOnInit() {
    this.renderMap(this.mapCenter);
  }

}
