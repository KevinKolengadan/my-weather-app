import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastComponent } from './daily-forecast.component';
import {WeatherServiceMock} from '../../../mock/weather.service.mock';
import * as moment from 'moment';
import {Geocode} from '../model/geocode.model';
import {provideMockStore} from '@ngrx/store/testing';
import {UtilityService} from '../service/utility.service';

describe('DailyForecastComponent', () => {
  let component: DailyForecastComponent;
  let fixture: ComponentFixture<DailyForecastComponent>;

  beforeEach(async () => {
    const initialState = {
      loc: {
        lat: -37.69607200000001,
        long: 144.760269
      },
      weather: new WeatherServiceMock().getAllData(-37.69607200000001, 144.760269),
      dateSelection: 0,
      hourSelection: moment().format('H'),
      geocode: new Geocode(new WeatherServiceMock().getMockAddressComponent())
    };
    await TestBed.configureTestingModule({
      declarations: [ DailyForecastComponent ],
      providers: [
        provideMockStore({initialState}),
        UtilityService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
