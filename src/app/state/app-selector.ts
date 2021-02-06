import {Geocode} from '../model/geocode.model';
import {Weather} from '../model/weather.model';

export interface AppState {
  loc: {
    lat: string;
    long: string;
  };
  weather: Weather;
  geocode: Geocode;
}

export const selectWeather = (state: AppState) => state.weather;
export const selectLocation = (state: AppState) => state.loc;
export const selectGeocode = (state: AppState) => state.geocode;
