import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectWeather} from '../state/app-selector';
import {UtilityService} from '../service/utility.service';
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

}
