import {Component, OnInit} from '@angular/core';
import {WeatherService} from './service/weather.service';
import {select, Store} from '@ngrx/store';
import {SET_LOCATION} from './state/location-reducer';
import {forkJoin} from 'rxjs';
import {Geocode} from './model/geocode.model';
import {SET_GEOCODE} from './state/geocode-reducer';
import {SET_WEATHER} from './state/weather-reducer';
import {selectHourSelection} from './state/app-selector';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  hourSelection$ = this.store.pipe(select(selectHourSelection));
  title = 'my-weather-app';
  location: {
    lat: number,
    long: number
  };

  colors = ['#10111D', '#111421', '#121724', '#131C2B', '#142132', '#152639',
            '#193A55', '#25557C', '#316FA3', '#3D8ACA', '#4397DD', '#469EE7',
            '#48A4F0', '#50A6ED', '#57A7E9', '#50A6ED', '#48A4F0', '#859889',
            '#B49443', '#C3922B', '#3D3221', '#152639', '#121724', '#111421'
  ];

  constructor(
    private weatherService: WeatherService,
    private store: Store
  ) {

  }

  ngOnInit(): void {
    this.getLocation();
  }
  setBackground(hour: string): string {
    if (!hour) {
      hour = moment().format('H');
    }
    const index = Number(hour);
    return this.colors[index];
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
              if (locationResult?.results?.length > 0 && locationResult.results[0].address_components) {
                const geocode = new Geocode(locationResult.results[0].address_components);
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
