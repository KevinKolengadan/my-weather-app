import {Observable, of} from 'rxjs';
import {Weather} from '../src/app/model/weather.model';

export class WeatherServiceMock {

  getAllData(lat: number, lon: number): Observable<Weather> {
    return of(this.getMockWeatherForcastData());
  }
  getLocationDetails(lat: number, lon: number): Observable<any> {
    return of(this.getMockGoogleMapData());
  }

  getMockWeatherForcastData(): Weather{
    return {
      lat: -37.6961,
      lon: 144.7603,
      timezone: 'Australia/Melbourne',
      timezone_offset: 39600,
      current: {
        dt: 1612690009,
        sunrise: 1612640496,
        sunset: 1612690117,
        temp: 16.16,
        feels_like: 10.45,
        pressure: 1014,
        humidity: 67,
        dew_point: 10.04,
        uvi: 0,
        clouds: 75,
        visibility: 10000,
        wind_speed: 8.23,
        wind_deg: 180,
        weather: [{
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }]
      },
      minutely: [{
        dt: 1612690020,
        precipitation: 0
      }, {
        dt: 1612690080,
        precipitation: 0
      }, {
        dt: 1612690140,
        precipitation: 0
      }, {
        dt: 1612690200,
        precipitation: 0
      }, {
        dt: 1612690260,
        precipitation: 0
      }, {
        dt: 1612690320,
        precipitation: 0
      }, {
        dt: 1612690380,
        precipitation: 0
      }, {
        dt: 1612690440,
        precipitation: 0
      }, {
        dt: 1612690500,
        precipitation: 0
      }, {
        dt: 1612690560,
        precipitation: 0
      }, {
        dt: 1612690620,
        precipitation: 0
      }, {
        dt: 1612690680,
        precipitation: 0
      }, {
        dt: 1612690740,
        precipitation: 0
      }, {
        dt: 1612690800,
        precipitation: 0
      }, {
        dt: 1612690860,
        precipitation: 0
      }, {
        dt: 1612690920,
        precipitation: 0
      }, {
        dt: 1612690980,
        precipitation: 0
      }, {
        dt: 1612691040,
        precipitation: 0
      }, {
        dt: 1612691100,
        precipitation: 0
      }, {
        dt: 1612691160,
        precipitation: 0
      }, {
        dt: 1612691220,
        precipitation: 0
      }, {
        dt: 1612691280,
        precipitation: 0
      }, {
        dt: 1612691340,
        precipitation: 0
      }, {
        dt: 1612691400,
        precipitation: 0
      }, {
        dt: 1612691460,
        precipitation: 0
      }, {
        dt: 1612691520,
        precipitation: 0
      }, {
        dt: 1612691580,
        precipitation: 0
      }, {
        dt: 1612691640,
        precipitation: 0
      }, {
        dt: 1612691700,
        precipitation: 0
      }, {
        dt: 1612691760,
        precipitation: 0
      }, {
        dt: 1612691820,
        precipitation: 0
      }, {
        dt: 1612691880,
        precipitation: 0
      }, {
        dt: 1612691940,
        precipitation: 0
      }, {
        dt: 1612692000,
        precipitation: 0
      }, {
        dt: 1612692060,
        precipitation: 0
      }, {
        dt: 1612692120,
        precipitation: 0
      }, {
        dt: 1612692180,
        precipitation: 0
      }, {
        dt: 1612692240,
        precipitation: 0
      }, {
        dt: 1612692300,
        precipitation: 0
      }, {
        dt: 1612692360,
        precipitation: 0
      }, {
        dt: 1612692420,
        precipitation: 0
      }, {
        dt: 1612692480,
        precipitation: 0
      }, {
        dt: 1612692540,
        precipitation: 0
      }, {
        dt: 1612692600,
        precipitation: 0
      }, {
        dt: 1612692660,
        precipitation: 0
      }, {
        dt: 1612692720,
        precipitation: 0
      }, {
        dt: 1612692780,
        precipitation: 0
      }, {
        dt: 1612692840,
        precipitation: 0
      }, {
        dt: 1612692900,
        precipitation: 0
      }, {
        dt: 1612692960,
        precipitation: 0
      }, {
        dt: 1612693020,
        precipitation: 0
      }, {
        dt: 1612693080,
        precipitation: 0
      }, {
        dt: 1612693140,
        precipitation: 0
      }, {
        dt: 1612693200,
        precipitation: 0
      }, {
        dt: 1612693260,
        precipitation: 0
      }, {
        dt: 1612693320,
        precipitation: 0
      }, {
        dt: 1612693380,
        precipitation: 0
      }, {
        dt: 1612693440,
        precipitation: 0
      }, {
        dt: 1612693500,
        precipitation: 0
      }, {
        dt: 1612693560,
        precipitation: 0
      }, {
        dt: 1612693620,
        precipitation: 0
      }],
      hourly: [{
        dt: 1612688400,
        temp: 16.16,
        feels_like: 11.91,
        pressure: 1014,
        humidity: 67,
        dew_point: 10.04,
        uvi: 0,
        clouds: 75,
        visibility: 10000,
        wind_speed: 6.15,
        wind_deg: 176,
        weather: [{
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612692000,
        temp: 15.25,
        feels_like: 11.44,
        pressure: 1014,
        humidity: 69,
        dew_point: 9.61,
        uvi: 0,
        clouds: 61,
        visibility: 10000,
        wind_speed: 5.35,
        wind_deg: 183,
        weather: [{
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612695600,
        temp: 14.23,
        feels_like: 10.72,
        pressure: 1015,
        humidity: 72,
        dew_point: 9.26,
        uvi: 0,
        clouds: 47,
        visibility: 10000,
        wind_speed: 4.79,
        wind_deg: 191,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612699200,
        temp: 13.84,
        feels_like: 10.58,
        pressure: 1015,
        humidity: 73,
        dew_point: 9.09,
        uvi: 0,
        clouds: 48,
        visibility: 10000,
        wind_speed: 4.37,
        wind_deg: 195,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612702800,
        temp: 14.28,
        feels_like: 10.94,
        pressure: 1015,
        humidity: 68,
        dew_point: 8.46,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.26,
        wind_deg: 184,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612706400,
        temp: 14.25,
        feels_like: 10.82,
        pressure: 1015,
        humidity: 66,
        dew_point: 8.16,
        uvi: 0,
        clouds: 99,
        visibility: 10000,
        wind_speed: 4.23,
        wind_deg: 176,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612710000,
        temp: 13.93,
        feels_like: 10.33,
        pressure: 1015,
        humidity: 67,
        dew_point: 8.11,
        uvi: 0,
        clouds: 92,
        visibility: 10000,
        wind_speed: 4.45,
        wind_deg: 175,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612713600,
        temp: 13.82,
        feels_like: 10.13,
        pressure: 1015,
        humidity: 69,
        dew_point: 8.32,
        uvi: 0,
        clouds: 93,
        visibility: 10000,
        wind_speed: 4.69,
        wind_deg: 174,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612717200,
        temp: 13.76,
        feels_like: 10.26,
        pressure: 1015,
        humidity: 71,
        dew_point: 8.65,
        uvi: 0,
        clouds: 93,
        visibility: 10000,
        wind_speed: 4.54,
        wind_deg: 181,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612720800,
        temp: 13.76,
        feels_like: 10.29,
        pressure: 1015,
        humidity: 71,
        dew_point: 8.77,
        uvi: 0,
        clouds: 95,
        visibility: 10000,
        wind_speed: 4.5,
        wind_deg: 181,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612724400,
        temp: 13.73,
        feels_like: 10.35,
        pressure: 1015,
        humidity: 72,
        dew_point: 8.79,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.43,
        wind_deg: 184,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }],
        pop: 0
      }, {
        dt: 1612728000,
        temp: 13.67,
        feels_like: 10.2,
        pressure: 1016,
        humidity: 72,
        dew_point: 8.73,
        uvi: 0.08,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.54,
        wind_deg: 187,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612731600,
        temp: 13.78,
        feels_like: 10.23,
        pressure: 1016,
        humidity: 71,
        dew_point: 8.79,
        uvi: 0.55,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.62,
        wind_deg: 186,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612735200,
        temp: 14.11,
        feels_like: 10.51,
        pressure: 1017,
        humidity: 70,
        dew_point: 8.88,
        uvi: 1.67,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.73,
        wind_deg: 183,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612738800,
        temp: 14.47,
        feels_like: 11.03,
        pressure: 1017,
        humidity: 69,
        dew_point: 8.9,
        uvi: 3.49,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.55,
        wind_deg: 181,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612742400,
        temp: 15.17,
        feels_like: 11.54,
        pressure: 1017,
        humidity: 65,
        dew_point: 8.86,
        uvi: 5.6,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.74,
        wind_deg: 176,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612746000,
        temp: 15.82,
        feels_like: 12.14,
        pressure: 1017,
        humidity: 64,
        dew_point: 9.18,
        uvi: 9.67,
        clouds: 94,
        visibility: 10000,
        wind_speed: 4.95,
        wind_deg: 178,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612749600,
        temp: 16.5,
        feels_like: 12.6,
        pressure: 1016,
        humidity: 62,
        dew_point: 9.32,
        uvi: 10.98,
        clouds: 97,
        visibility: 10000,
        wind_speed: 5.33,
        wind_deg: 174,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612753200,
        temp: 16.77,
        feels_like: 12.76,
        pressure: 1016,
        humidity: 62,
        dew_point: 9.5,
        uvi: 10.78,
        clouds: 97,
        visibility: 10000,
        wind_speed: 5.58,
        wind_deg: 177,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612756800,
        temp: 16.86,
        feels_like: 12.77,
        pressure: 1015,
        humidity: 61,
        dew_point: 9.5,
        uvi: 8.54,
        clouds: 98,
        visibility: 10000,
        wind_speed: 5.64,
        wind_deg: 177,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612760400,
        temp: 17.44,
        feels_like: 13.12,
        pressure: 1015,
        humidity: 59,
        dew_point: 9.53,
        uvi: 6.11,
        clouds: 95,
        visibility: 10000,
        wind_speed: 5.98,
        wind_deg: 176,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612764000,
        temp: 17.51,
        feels_like: 13.23,
        pressure: 1015,
        humidity: 59,
        dew_point: 9.57,
        uvi: 3.55,
        clouds: 96,
        visibility: 10000,
        wind_speed: 5.96,
        wind_deg: 177,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612767600,
        temp: 17.31,
        feels_like: 13.21,
        pressure: 1015,
        humidity: 60,
        dew_point: 9.51,
        uvi: 1.83,
        clouds: 43,
        visibility: 10000,
        wind_speed: 5.72,
        wind_deg: 173,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }],
        pop: 0
      }, {
        dt: 1612771200,
        temp: 16.58,
        feels_like: 12.64,
        pressure: 1016,
        humidity: 63,
        dew_point: 9.53,
        uvi: 0.53,
        clouds: 70,
        visibility: 10000,
        wind_speed: 5.51,
        wind_deg: 178,
        weather: [{
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612774800,
        temp: 15.71,
        feels_like: 12.17,
        pressure: 1017,
        humidity: 67,
        dew_point: 9.66,
        uvi: 0,
        clouds: 47,
        visibility: 10000,
        wind_speed: 4.97,
        wind_deg: 178,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }],
        pop: 0
      }, {
        dt: 1612778400,
        temp: 14.83,
        feels_like: 11.81,
        pressure: 1017,
        humidity: 71,
        dew_point: 9.77,
        uvi: 0,
        clouds: 40,
        visibility: 10000,
        wind_speed: 4.23,
        wind_deg: 175,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612782000,
        temp: 14.44,
        feels_like: 11.9,
        pressure: 1018,
        humidity: 74,
        dew_point: 9.98,
        uvi: 0,
        clouds: 42,
        visibility: 10000,
        wind_speed: 3.64,
        wind_deg: 172,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612785600,
        temp: 14.29,
        feels_like: 11.79,
        pressure: 1018,
        humidity: 75,
        dew_point: 10.12,
        uvi: 0,
        clouds: 39,
        visibility: 10000,
        wind_speed: 3.61,
        wind_deg: 168,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612789200,
        temp: 14.02,
        feels_like: 11.68,
        pressure: 1018,
        humidity: 77,
        dew_point: 10.2,
        uvi: 0,
        clouds: 29,
        visibility: 10000,
        wind_speed: 3.43,
        wind_deg: 167,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612792800,
        temp: 13.89,
        feels_like: 11.61,
        pressure: 1018,
        humidity: 78,
        dew_point: 10.18,
        uvi: 0,
        clouds: 30,
        visibility: 10000,
        wind_speed: 3.37,
        wind_deg: 162,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612796400,
        temp: 13.71,
        feels_like: 11.82,
        pressure: 1017,
        humidity: 79,
        dew_point: 10.15,
        uvi: 0,
        clouds: 25,
        visibility: 10000,
        wind_speed: 2.81,
        wind_deg: 160,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }],
        pop: 0
      }, {
        dt: 1612800000,
        temp: 13.49,
        feels_like: 11.79,
        pressure: 1017,
        humidity: 79,
        dew_point: 10.09,
        uvi: 0,
        clouds: 22,
        visibility: 10000,
        wind_speed: 2.46,
        wind_deg: 161,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }],
        pop: 0
      }, {
        dt: 1612803600,
        temp: 13.23,
        feels_like: 11.7,
        pressure: 1017,
        humidity: 80,
        dew_point: 10.03,
        uvi: 0,
        clouds: 19,
        visibility: 10000,
        wind_speed: 2.19,
        wind_deg: 157,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }],
        pop: 0
      }, {
        dt: 1612807200,
        temp: 13.01,
        feels_like: 11.77,
        pressure: 1017,
        humidity: 81,
        dew_point: 9.96,
        uvi: 0,
        clouds: 16,
        visibility: 10000,
        wind_speed: 1.77,
        wind_deg: 159,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }],
        pop: 0
      }, {
        dt: 1612810800,
        temp: 12.8,
        feels_like: 11.62,
        pressure: 1017,
        humidity: 82,
        dew_point: 9.85,
        uvi: 0,
        clouds: 2,
        visibility: 10000,
        wind_speed: 1.68,
        wind_deg: 168,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }],
        pop: 0
      }, {
        dt: 1612814400,
        temp: 12.66,
        feels_like: 11.62,
        pressure: 1017,
        humidity: 82,
        dew_point: 9.77,
        uvi: 0,
        clouds: 2,
        visibility: 10000,
        wind_speed: 1.42,
        wind_deg: 177,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        pop: 0
      }, {
        dt: 1612818000,
        temp: 14.05,
        feels_like: 12.79,
        pressure: 1018,
        humidity: 77,
        dew_point: 10.09,
        uvi: 0.79,
        clouds: 2,
        visibility: 10000,
        wind_speed: 1.89,
        wind_deg: 169,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        pop: 0
      }, {
        dt: 1612821600,
        temp: 15.71,
        feels_like: 13.58,
        pressure: 1018,
        humidity: 67,
        dew_point: 9.82,
        uvi: 2.42,
        clouds: 1,
        visibility: 10000,
        wind_speed: 2.95,
        wind_deg: 152,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        pop: 0
      }, {
        dt: 1612825200,
        temp: 17.23,
        feels_like: 14.92,
        pressure: 1018,
        humidity: 59,
        dew_point: 9.38,
        uvi: 5.05,
        clouds: 1,
        visibility: 10000,
        wind_speed: 3.04,
        wind_deg: 157,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        pop: 0
      }, {
        dt: 1612828800,
        temp: 18.83,
        feels_like: 16.45,
        pressure: 1017,
        humidity: 53,
        dew_point: 9.23,
        uvi: 8.12,
        clouds: 1,
        visibility: 10000,
        wind_speed: 3.1,
        wind_deg: 157,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        pop: 0
      }, {
        dt: 1612832400,
        temp: 20.61,
        feels_like: 18.57,
        pressure: 1017,
        humidity: 47,
        dew_point: 9.09,
        uvi: 10.93,
        clouds: 37,
        visibility: 10000,
        wind_speed: 2.57,
        wind_deg: 155,
        weather: [{
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }],
        pop: 0
      }, {
        dt: 1612836000,
        temp: 22.54,
        feels_like: 20.8,
        pressure: 1016,
        humidity: 42,
        dew_point: 9.17,
        uvi: 12.42,
        clouds: 24,
        visibility: 10000,
        wind_speed: 2.16,
        wind_deg: 177,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }],
        pop: 0
      }, {
        dt: 1612839600,
        temp: 24.02,
        feels_like: 22.4,
        pressure: 1015,
        humidity: 39,
        dew_point: 9.48,
        uvi: 12.19,
        clouds: 15,
        visibility: 10000,
        wind_speed: 2.07,
        wind_deg: 188,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }],
        pop: 0
      }, {
        dt: 1612843200,
        temp: 24.82,
        feels_like: 22.91,
        pressure: 1015,
        humidity: 38,
        dew_point: 9.9,
        uvi: 10.04,
        clouds: 12,
        visibility: 10000,
        wind_speed: 2.61,
        wind_deg: 192,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }],
        pop: 0
      }, {
        dt: 1612846800,
        temp: 25.16,
        feels_like: 23.1,
        pressure: 1014,
        humidity: 39,
        dew_point: 10.35,
        uvi: 7.17,
        clouds: 10,
        visibility: 10000,
        wind_speed: 3.09,
        wind_deg: 182,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        pop: 0
      }, {
        dt: 1612850400,
        temp: 24.97,
        feels_like: 22.54,
        pressure: 1014,
        humidity: 40,
        dew_point: 10.73,
        uvi: 4.17,
        clouds: 21,
        visibility: 10000,
        wind_speed: 3.7,
        wind_deg: 182,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }],
        pop: 0
      }, {
        dt: 1612854000,
        temp: 24.09,
        feels_like: 21.74,
        pressure: 1014,
        humidity: 43,
        dew_point: 10.91,
        uvi: 1.68,
        clouds: 93,
        visibility: 10000,
        wind_speed: 3.7,
        wind_deg: 182,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }, {
        dt: 1612857600,
        temp: 23.38,
        feels_like: 21.5,
        pressure: 1014,
        humidity: 45,
        dew_point: 11.03,
        uvi: 0.48,
        clouds: 85,
        visibility: 10000,
        wind_speed: 3.05,
        wind_deg: 194,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        pop: 0
      }],
      daily: [{
        dt: 1612663200,
        sunrise: 1612640496,
        sunset: 1612690117,
        temp: {
          day: 17.43,
          min: 13.84,
          max: 18.52,
          night: 13.84,
          eve: 16.75,
          morn: 15.51
        },
        feels_like: {
          day: 14.34,
          night: 10.58,
          eve: 12.07,
          morn: 12.55
        },
        pressure: 1012,
        humidity: 64,
        dew_point: 10.6,
        wind_speed: 4.69,
        wind_deg: 188,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        clouds: 100,
        pop: 0.22,
        uvi: 7.5
      }, {
        dt: 1612749600,
        sunrise: 1612726964,
        sunset: 1612776456,
        temp: {
          day: 16.5,
          min: 13.67,
          max: 17.51,
          night: 14.29,
          eve: 16.58,
          morn: 13.67
        },
        feels_like: {
          day: 12.6,
          night: 11.79,
          eve: 12.64,
          morn: 10.2
        },
        pressure: 1016,
        humidity: 62,
        dew_point: 9.32,
        wind_speed: 5.33,
        wind_deg: 174,
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }],
        clouds: 97,
        pop: 0,
        uvi: 10.98
      }, {
        dt: 1612836000,
        sunrise: 1612813432,
        sunset: 1612862794,
        temp: {
          day: 22.54,
          min: 12.66,
          max: 25.16,
          night: 19.33,
          eve: 23.38,
          morn: 12.66
        },
        feels_like: {
          day: 20.8,
          night: 18.6,
          eve: 21.5,
          morn: 11.62
        },
        pressure: 1016,
        humidity: 42,
        dew_point: 9.17,
        wind_speed: 2.16,
        wind_deg: 177,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }],
        clouds: 24,
        pop: 0,
        uvi: 12.42
      }, {
        dt: 1612922400,
        sunrise: 1612899900,
        sunset: 1612949130,
        temp: {
          day: 29.9,
          min: 15.68,
          max: 30.25,
          night: 24.05,
          eve: 26.98,
          morn: 15.68
        },
        feels_like: {
          day: 27.48,
          night: 23.5,
          eve: 27.47,
          morn: 15.85
        },
        pressure: 1013,
        humidity: 35,
        dew_point: 13.21,
        wind_speed: 4.68,
        wind_deg: 9,
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        clouds: 4,
        pop: 0,
        uvi: 12.53
      }, {
        dt: 1613008800,
        sunrise: 1612986368,
        sunset: 1613035465,
        temp: {
          day: 31.31,
          min: 23.17,
          max: 31.31,
          night: 27.42,
          eve: 29.73,
          morn: 23.32
        },
        feels_like: {
          day: 25.91,
          night: 24.05,
          eve: 24.74,
          morn: 19.05
        },
        pressure: 1006,
        humidity: 30,
        dew_point: 11.79,
        wind_speed: 8.45,
        wind_deg: 4,
        weather: [{
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }],
        clouds: 73,
        pop: 0.03,
        uvi: 12.29
      }, {
        dt: 1613095200,
        sunrise: 1613072835,
        sunset: 1613121799,
        temp: {
          day: 22.51,
          min: 15.69,
          max: 22.51,
          night: 15.69,
          eve: 17.43,
          morn: 18.09
        },
        feels_like: {
          day: 20.36,
          night: 13.8,
          eve: 14.12,
          morn: 17.37
        },
        pressure: 1007,
        humidity: 52,
        dew_point: 12.19,
        wind_speed: 4.03,
        wind_deg: 175,
        weather: [{
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }],
        clouds: 51,
        pop: 0.14,
        uvi: 13
      }, {
        dt: 1613181600,
        sunrise: 1613159302,
        sunset: 1613208131,
        temp: {
          day: 21.22,
          min: 14.24,
          max: 21.22,
          night: 15.9,
          eve: 17.58,
          morn: 15.09
        },
        feels_like: {
          day: 18.48,
          night: 13.9,
          eve: 14.39,
          morn: 14.07
        },
        pressure: 1012,
        humidity: 51,
        dew_point: 10.84,
        wind_speed: 4.24,
        wind_deg: 180,
        weather: [{
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }],
        clouds: 15,
        pop: 0,
        uvi: 13
      }, {
        dt: 1613268000,
        sunrise: 1613245769,
        sunset: 1613294462,
        temp: {
          day: 20.1,
          min: 15.09,
          max: 20.1,
          night: 15.09,
          eve: 16.61,
          morn: 15.36
        },
        feels_like: {
          day: 15.92,
          night: 12.98,
          eve: 13.28,
          morn: 12.7
        },
        pressure: 1018,
        humidity: 51,
        dew_point: 9.71,
        wind_speed: 5.9,
        wind_deg: 174,
        weather: [{
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }],
        clouds: 6,
        pop: 0.2,
        rain: 0.35,
        uvi: 13
      }]
    };
  }

  getMockAddressComponent(): any[] {
    return [
      {
        long_name : '63',
        short_name : '63',
        types : [ 'street_number' ]
      },
      {
        long_name : 'Delbridge Drive',
        short_name : 'Delbridge Dr',
        types : [ 'route' ]
      },
      {
        long_name : 'Sydenham',
        short_name : 'Sydenham',
        types : [ 'locality', 'political' ]
      },
      {
        long_name : 'Brimbank City',
        short_name : 'Brimbank',
        types : [ 'administrative_area_level_2', 'political' ]
      },
      {
        long_name : 'Victoria',
        short_name : 'VIC',
        types : [ 'administrative_area_level_1', 'political' ]
      },
      {
        long_name : 'Australia',
        short_name : 'AU',
        types : [ 'country', 'political' ]
      },
      {
        long_name : '3037',
        short_name : '3037',
        types : [ 'postal_code' ]
      }
    ];
  }

  getMockGoogleMapData(): any{
    return {
      plus_code : {
        compound_code : '8Q36+H4 Sydenham VIC, Australia',
        global_code : '4RJ68Q36+H4'
      },
      results : [
        {
          address_components : [
            {
              long_name : '63',
              short_name : '63',
              types : [ 'street_number' ]
            },
            {
              long_name : 'Delbridge Drive',
              short_name : 'Delbridge Dr',
              types : [ 'route' ]
            },
            {
              long_name : 'Sydenham',
              short_name : 'Sydenham',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            },
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            }
          ],
          formatted_address : '63 Delbridge Dr, Sydenham VIC 3037, Australia',
          geometry : {
            location : {
              lat : -37.6963966,
              lng : 144.7603263
            },
            location_type : 'ROOFTOP',
            viewport : {
              northeast : {
                lat : -37.6950476197085,
                lng : 144.7616752802915
              },
              southwest : {
                lat : -37.6977455802915,
                lng : 144.7589773197085
              }
            }
          },
          place_id : 'ChIJVygg1tz11moRhjwAn3VUaxk',
          plus_code : {
            compound_code : '8Q36+C4 Sydenham VIC, Australia',
            global_code : '4RJ68Q36+C4'
          },
          types : [ 'street_address' ]
        },
        {
          address_components : [
            {
              long_name : '59',
              short_name : '59',
              types : [ 'street_number' ]
            },
            {
              long_name : 'Delbridge Drive',
              short_name : 'Delbridge Dr',
              types : [ 'route' ]
            },
            {
              long_name : 'Sydenham',
              short_name : 'Sydenham',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            },
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            }
          ],
          formatted_address : '59 Delbridge Dr, Sydenham VIC 3037, Australia',
          geometry : {
            location : {
              lat : -37.696493,
              lng : 144.760878
            },
            location_type : 'ROOFTOP',
            viewport : {
              northeast : {
                lat : -37.6951440197085,
                lng : 144.7622269802915
              },
              southwest : {
                lat : -37.69784198029149,
                lng : 144.7595290197085
              }
            }
          },
          place_id : 'ChIJ60ELVfv11moRMJ5la0gxuDA',
          plus_code : {
            compound_code : '8Q36+C9 Sydenham VIC, Australia',
            global_code : '4RJ68Q36+C9'
          },
          types : [ 'establishment', 'point_of_interest' ]
        },
        {
          address_components : [
            {
              long_name : '59',
              short_name : '59',
              types : [ 'street_number' ]
            },
            {
              long_name : 'Delbridge Drive',
              short_name : 'Delbridge Dr',
              types : [ 'route' ]
            },
            {
              long_name : 'Sydenham',
              short_name : 'Sydenham',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            },
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            }
          ],
          formatted_address : '59 Delbridge Dr, Sydenham VIC 3037, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -37.6964559,
                lng : 144.7609709
              },
              southwest : {
                lat : -37.6966562,
                lng : 144.7607972
              }
            },
            location : {
              lat : -37.69658039999999,
              lng : 144.7609007
            },
            location_type : 'ROOFTOP',
            viewport : {
              northeast : {
                lat : -37.6952070697085,
                lng : 144.7622330302915
              },
              southwest : {
                lat : -37.6979050302915,
                lng : 144.7595350697085
              }
            }
          },
          place_id : 'ChIJ_XbnLt311moRWGbxzh9nUvQ',
          types : [ 'premise' ]
        },
        {
          address_components : [
            {
              long_name : '66',
              short_name : '66',
              types : [ 'street_number' ]
            },
            {
              long_name : 'Delbridge Drive',
              short_name : 'Delbridge Dr',
              types : [ 'route' ]
            },
            {
              long_name : 'Sydenham',
              short_name : 'Sydenham',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            },
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            }
          ],
          formatted_address : '66 Delbridge Dr, Sydenham VIC 3037, Australia',
          geometry : {
            location : {
              lat : -37.6962783,
              lng : 144.760298
            },
            location_type : 'RANGE_INTERPOLATED',
            viewport : {
              northeast : {
                lat : -37.6949293197085,
                lng : 144.7616469802915
              },
              southwest : {
                lat : -37.6976272802915,
                lng : 144.7589490197085
              }
            }
          },
          place_id : 'Ei02NiBEZWxicmlkZ2UgRHIsIFN5ZGVuaGFtIFZJQyAzMDM3LCBBdXN0cmFsaWEiGhIYChQKEgkZcpwp3fXWahFfO_Hxs28kNxBC',
          types : [ 'street_address' ]
        },
        {
          address_components : [
            {
              long_name : '63-67',
              short_name : '63-67',
              types : [ 'street_number' ]
            },
            {
              long_name : 'Delbridge Drive',
              short_name : 'Delbridge Dr',
              types : [ 'route' ]
            },
            {
              long_name : 'Sydenham',
              short_name : 'Sydenham',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            },
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            }
          ],
          formatted_address : '63-67 Delbridge Dr, Sydenham VIC 3037, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -37.6962783,
                lng : 144.760298
              },
              southwest : {
                lat : -37.6967852,
                lng : 144.7600713
              }
            },
            location : {
              lat : -37.6964978,
              lng : 144.7601239
            },
            location_type : 'GEOMETRIC_CENTER',
            viewport : {
              northeast : {
                lat : -37.6951827697085,
                lng : 144.7615336302915
              },
              southwest : {
                lat : -37.6978807302915,
                lng : 144.7588356697085
              }
            }
          },
          place_id : 'ChIJGXKcKd311moRXjvx8bNvJDc',
          types : [ 'route' ]
        },
        {
          address_components : [
            {
              long_name : 'Sydenham',
              short_name : 'Sydenham',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            },
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            }
          ],
          formatted_address : 'Sydenham VIC 3037, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -37.680953,
                lng : 144.7820588
              },
              southwest : {
                lat : -37.7112979,
                lng : 144.7554416
              }
            },
            location : {
              lat : -37.702,
              lng : 144.767
            },
            location_type : 'APPROXIMATE',
            viewport : {
              northeast : {
                lat : -37.680953,
                lng : 144.7820588
              },
              southwest : {
                lat : -37.7112979,
                lng : 144.7554416
              }
            }
          },
          place_id : 'ChIJMU4X_-P11moRgNGMIXVWBAU',
          types : [ 'locality', 'political' ]
        },
        {
          address_components : [
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            },
            {
              long_name : 'Delahey',
              short_name : 'Delahey',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            }
          ],
          formatted_address : 'Delahey VIC 3037, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -37.6629586,
                lng : 144.7932906
              },
              southwest : {
                lat : -37.7279638,
                lng : 144.7247372
              }
            },
            location : {
              lat : -37.69400359999999,
              lng : 144.7521888
            },
            location_type : 'APPROXIMATE',
            viewport : {
              northeast : {
                lat : -37.6629586,
                lng : 144.7932906
              },
              southwest : {
                lat : -37.7279638,
                lng : 144.7247372
              }
            }
          },
          place_id : 'ChIJDZN5vsP11moRUDsuRnhWBBw',
          postcode_localities : [ 'Calder Park', 'Delahey', 'Hillside', 'Sydenham', 'Taylors Hill' ],
          types : [ 'postal_code' ]
        },
        {
          address_components : [
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            }
          ],
          formatted_address : 'Brimbank, VIC, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -37.6629269,
                lng : 144.8884621
              },
              southwest : {
                lat : -37.8228039,
                lng : 144.7441915
              }
            },
            location : {
              lat : -37.7594793,
              lng : 144.8071366
            },
            location_type : 'APPROXIMATE',
            viewport : {
              northeast : {
                lat : -37.6629269,
                lng : 144.8884621
              },
              southwest : {
                lat : -37.8228039,
                lng : 144.7441915
              }
            }
          },
          place_id : 'ChIJUXXCOAhf1moRI9x3_C8aCw4',
          types : [ 'administrative_area_level_2', 'political' ]
        },
        {
          address_components : [
            {
              long_name : 'Melbourne',
              short_name : 'Melbourne',
              types : [ 'colloquial_area', 'locality', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            }
          ],
          formatted_address : 'Melbourne VIC, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -37.5112737,
                lng : 145.5125288
              },
              southwest : {
                lat : -38.4338593,
                lng : 144.5937418
              }
            },
            location : {
              lat : -37.8136276,
              lng : 144.9630576
            },
            location_type : 'APPROXIMATE',
            viewport : {
              northeast : {
                lat : -37.5112737,
                lng : 145.5125288
              },
              southwest : {
                lat : -38.4338593,
                lng : 144.5937418
              }
            }
          },
          place_id : 'ChIJ90260rVG1moRkM2MIXVWBAQ',
          types : [ 'colloquial_area', 'locality', 'political' ]
        },
        {
          address_components : [
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            }
          ],
          formatted_address : 'Victoria, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -33.9806474,
                lng : 150.0169685
              },
              southwest : {
                lat : -39.18316069999999,
                lng : 140.9616819
              }
            },
            location : {
              lat : -37.4713077,
              lng : 144.7851531
            },
            location_type : 'APPROXIMATE',
            viewport : {
              northeast : {
                lat : -33.9806474,
                lng : 150.0169685
              },
              southwest : {
                lat : -39.18316069999999,
                lng : 140.9616819
              }
            }
          },
          place_id : 'ChIJT5UYfksx1GoRNJWCvuL8Tlo',
          types : [ 'administrative_area_level_1', 'political' ]
        },
        {
          address_components : [
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            }
          ],
          formatted_address : 'Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -9.187026399999999,
                lng : 159.2872223
              },
              southwest : {
                lat : -54.83376579999999,
                lng : 110.9510339
              }
            },
            location : {
              lat : -25.274398,
              lng : 133.775136
            },
            location_type : 'APPROXIMATE',
            viewport : {
              northeast : {
                lat : -9.187026399999999,
                lng : 159.2872223
              },
              southwest : {
                lat : -54.83376579999999,
                lng : 110.9510339
              }
            }
          },
          place_id : 'ChIJ38WHZwf9KysRUhNblaFnglM',
          types : [ 'country', 'political' ]
        },
        {
          address_components : [
            {
              long_name : '8Q36+H4',
              short_name : '8Q36+H4',
              types : [ 'plus_code' ]
            },
            {
              long_name : 'Sydenham',
              short_name : 'Sydenham',
              types : [ 'locality', 'political' ]
            },
            {
              long_name : 'Brimbank City',
              short_name : 'Brimbank',
              types : [ 'administrative_area_level_2', 'political' ]
            },
            {
              long_name : 'Victoria',
              short_name : 'VIC',
              types : [ 'administrative_area_level_1', 'political' ]
            },
            {
              long_name : 'Australia',
              short_name : 'AU',
              types : [ 'country', 'political' ]
            },
            {
              long_name : '3037',
              short_name : '3037',
              types : [ 'postal_code' ]
            }
          ],
          formatted_address : '8Q36+H4 Sydenham VIC, Australia',
          geometry : {
            bounds : {
              northeast : {
                lat : -37.696,
                lng : 144.760375
              },
              southwest : {
                lat : -37.69612499999999,
                lng : 144.76025
              }
            },
            location : {
              lat : -37.69607200000001,
              lng : 144.760269
            },
            location_type : 'ROOFTOP',
            viewport : {
              northeast : {
                lat : -37.6947135197085,
                lng : 144.7616614802915
              },
              southwest : {
                lat : -37.6974114802915,
                lng : 144.7589635197085
              }
            }
          },
          place_id : 'GhIJp9Ql4xjZQsARNGWnH1QYYkA',
          plus_code : {
            compound_code : '8Q36+H4 Sydenham VIC, Australia',
            global_code : '4RJ68Q36+H4'
          },
          types : [ 'plus_code' ]
        }
      ],
      status : 'OK'
    };

  }
}
