import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { PeriodicService } from './periodic.service';
import { TimezoneService } from  './timezone.service';
import { GeocodingService } from './geocoding.service';
import { MapFormComponent } from './map-form/map-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    MapFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PeriodicService, GeocodingService, TimezoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
