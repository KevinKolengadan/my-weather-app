import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectDateSelection, selectGeocode, selectWeather} from '../state/app-selector';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UtilityService} from '../service/utility.service';
import {Weather} from '../model/weather.model';

/**
 * Component to show the overall weather for the day
 */
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
    //  logic to shift the orientation according to screen size change
    const layoutChanges = breakpointObserver.observe([
      '(min-width: 860px)',
    ]);

    layoutChanges.subscribe(result => {
      this.hideLeftSide = !result.matches;
    });
  }

  ngOnInit(): void {
  }

  /**
   * Function to get the image from open weather map
   * @param weather Weather Details
   * @param index Index selected
   * @param appendString Size of the image
   */
  getUrl(weather: Weather, index: number, appendString: string): string {
    if (!weather.daily || weather.daily.length < index || weather.daily[index]?.weather.length < 1) {
      return '';
    }

    return 'http://openweathermap.org/img/wn/' + weather.daily[index]?.weather[0].icon + appendString;
  }

}
