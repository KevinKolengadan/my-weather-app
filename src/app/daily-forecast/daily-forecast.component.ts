import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectDateSelection, selectWeather} from '../state/app-selector';
import {UtilityService} from '../service/utility.service';
import {SET_DATE_SELECTION} from '../state/date-seleection-reducer';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {

  weather$ = this.store.pipe(select(selectWeather));
  dateSelection$ = this.store.pipe(select(selectDateSelection));

  constructor(
    private store: Store,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void {
  }

  selectDate(index: number): void {
    this.store.dispatch({type: SET_DATE_SELECTION, payload: index});
  }
}
