import {Component, OnInit} from '@angular/core';
import {WeatherService} from './service/weather.service';
import {Store} from '@ngrx/store';
import {SET_LOCATION} from './state/location-reducer';
import {forkJoin} from 'rxjs';
import {Geocode} from './model/geocode.model';
import {SET_GEOCODE} from './state/geocode-reducer';
import {SET_WEATHER} from './state/weather-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-weather-app';
  location: {
    lat: number,
    long: number
  };

  constructor(
    private weatherService: WeatherService,
    private store: Store
  ) {

  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          this.location = {lat: position.coords.latitude, long: position.coords.longitude};
          this.store.dispatch({ type: SET_LOCATION, payload: this.location});
          forkJoin([
            this.weatherService.getLocationDetails(this.location.lat, this.location.long),
            this.weatherService.getAllData(this.location.lat, this.location.long)
          ]).subscribe(result => {
            if (result[0]) {
              const locationResult = result[0];
              if (locationResult[0]?.results?.length > 0 && locationResult[0].results[0].address_components) {
                const geocode = new Geocode(locationResult[0].results[0].address_components);
                this.store.dispatch({ type: SET_GEOCODE, payload: geocode});
              }
            }
            if (result[1]) {
              this.store.dispatch({ type: SET_WEATHER, payload: result[1]});
            }
          });
        }
      });
    }
  }
}
