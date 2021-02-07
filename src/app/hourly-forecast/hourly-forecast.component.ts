import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectWeather} from '../state/app-selector';
import {UtilityService} from '../service/utility.service';
import {SET_HOUR_SELECTION} from '../state/hour-selection-reducer';
import * as moment from 'moment';

/**
 * Component to show the hourly forecsat for today
 */
@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent implements OnInit {

  weather$ = this.store.pipe(select(selectWeather));

  constructor(
    private store: Store,
    public utilityService: UtilityService
  ) { }
  ngOnInit(): void {
  }

  /**
   * Select the hour to shift the color of the website to the hour selected
   * @param dt unix datetime of the hour selected
   */
  selectHour(dt: number): void {
    const hour = moment.unix(dt).format('H');
    this.store.dispatch({type: SET_HOUR_SELECTION, payload: hour});
  }


}
