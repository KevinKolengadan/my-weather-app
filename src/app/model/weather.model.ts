export interface Weather {
  current?: Day;
  daily?: Day[];
  hourly?: Hourly[];
  minutely?: Minutely[];
  timezone?: string;
  timezoneOffset?: number;

}

export interface Day {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: CurrentWeather[];
  wind_deg: number;
  wind_speed: number;
}

export interface Hourly {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: CurrentWeather[];
  wind_deg: number;
  wind_speed: number;
}

export interface Minutely {
  dt: number;
  precipitation: number;
}


export interface CurrentWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Daily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: FeelsLike;
  humidity: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  uvi: number;
  weather: CurrentWeather[];
  wind_deg: number;
  wind_speed: number;
}

export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}
