import {Geocode} from '../model/geocode.model';
import {Weather} from '../model/weather.model';

export interface AppState {
  loc: {
    lat: string;
    long: string;
  };
  weather: Weather;
  geocode: Geocode;
  dateSelection: number; // to store the index of the date selected
  hourSelection: string; // to store the current hour selected
}

export const selectWeather = (state: AppState) => state.weather;
export const selectLocation = (state: AppState) => state.loc;
export const selectGeocode = (state: AppState) => state.geocode;
export const selectDateSelection = (state: AppState) => state.dateSelection;
export const selectHourSelection = (state: AppState) => state.hourSelection;
