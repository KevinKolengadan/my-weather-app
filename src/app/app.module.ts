import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import {StoreModule} from '@ngrx/store';
import {locationReducer} from './state/location-reducer';
import {weatherReducer} from './state/weather-reducer';
import {HttpClientModule} from '@angular/common/http';
import {geocodeReducer} from './state/geocode-reducer';
import {dateSelectionReducer} from './state/date-seleection-reducer';
import {hourSelectionReducer} from './state/hour-selection-reducer';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    DailyForecastComponent,
    HourlyForecastComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    StoreModule.forRoot({
      loc: locationReducer,
      weather: weatherReducer,
      dateSelection: dateSelectionReducer,
      hourSelection: hourSelectionReducer,
      geocode: geocodeReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

