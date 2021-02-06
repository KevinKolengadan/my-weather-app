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

  getAllData(lat: number, lon: number): Observable<Weather> {
    return this.http.get(`${environment.apiUrl}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`);
  }

  getLocationDetails(lat: number, lon: number): Observable<any> {
    return this.http.get(  `${environment.googleApiUrl}/geocode/json?latlng=${lat},${lon}&key=${environment.googleApiKey}`);
  }
}
