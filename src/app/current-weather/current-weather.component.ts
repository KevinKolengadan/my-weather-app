import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectDateSelection, selectGeocode, selectWeather} from '../state/app-selector';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UtilityService} from '../service/utility.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  geocode$ = this.store.pipe(select(selectGeocode));
  weather$ = this.store.pipe(select(selectWeather));
  dateSelection$ = this.store.pipe(select(selectDateSelection));
  hideLeftSide = false;

  constructor(
    private store: Store,
    private breakpointObserver: BreakpointObserver,
    public utilityService: UtilityService
  ) {
    const layoutChanges = breakpointObserver.observe([
      '(min-width: 860px)',
    ]);

    layoutChanges.subscribe(result => {
      this.hideLeftSide = !result.matches;
    });
  }

  ngOnInit(): void {
  }

}
