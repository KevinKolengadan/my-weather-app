import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectDateSelection, selectWeather} from '../state/app-selector';
import {UtilityService} from '../service/utility.service';

/**
 * Component to display other weather details for the selected date
 */
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  weather$ = this.store.pipe(select(selectWeather));
  dateSelection$ = this.store.pipe(select(selectDateSelection));

  constructor(
    private store: Store,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void {
  }

}
