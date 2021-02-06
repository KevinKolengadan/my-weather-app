import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectWeather} from '../state/app-selector';
import * as moment from 'moment';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {

  weather$ = this.store.pipe(select(selectWeather));

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  getDay(dt: number, offset: number): string {
    const date = moment.unix(dt);
    if (date.format('DDD') === moment().format('DDD')) {
      return 'Today';
    }
    return date.format('ddd');
  }

  getDate(dt: number, offset: number): string {
    return moment.unix(dt).format('MMM D');
  }
}
