import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectWeather} from '../state/app-selector';
import * as moment from 'moment';
@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent implements OnInit {

  weather$ = this.store.pipe(select(selectWeather));

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  getHour(dt: number, offset: number): string {
    return moment.unix(dt).format('HH:mm');
  }
  getRounded(temp: number): number {
    return Math.round(temp);
  }

}
