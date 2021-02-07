import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {Weather} from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  /**
   * Function to get location details like suburb from Google Map API by providing latitude and longitude
   * @param lat latitude
   * @param lon longitude
   */
  getLocationDetails(lat: number, lon: number): Observable<any> {
    return this.http.get(  `${environment.googleApiUrl}/geocode/json?latlng=${lat},${lon}&key=${environment.googleApiKey}`);
  }

  /**
   * Function to get the weather forecast dataa from open weather map api by providing latitude and longitude
   * @param lat Latitude
   * @param lon Longitude
   */
  getAllData(lat: number, lon: number): Observable<Weather> {
    return this.http.get(`${environment.apiUrl}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`);
  }

}
