import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsComponent } from './weather-details.component';
import {UtilityService} from '../service/utility.service';
import * as moment from 'moment';
import {Geocode} from '../model/geocode.model';
import {WeatherServiceMock} from '../../../mock/weather.service.mock';
import {provideMockStore} from '@ngrx/store/testing';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;

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
      declarations: [ WeatherDetailsComponent ],
      providers: [
        provideMockStore({initialState}),
        UtilityService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
