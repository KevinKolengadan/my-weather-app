import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {WeatherService} from './service/weather.service';
import {WeatherServiceMock} from '../../mock/weather.service.mock';
import {provideMockStore} from '@ngrx/store/testing';
import * as moment from 'moment';
import {Geocode} from './model/geocode.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    const initialState = {
      loc: {},
      weather: {},
      dateSelection: 0,
      hourSelection: moment().format('H'),
      geocode: new Geocode([])
    };
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({initialState}),
        { provide: WeatherService, useClass: WeatherServiceMock}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-weather-app');
  });

});
