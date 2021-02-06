import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }


  getRoundValue(temp: number): number {
    return Math.round(temp);
  }

  getHour(dt: number): string {
    return moment.unix(dt).format('HH:mm');

  }

  getDay(dt: number): string {
    const date = moment.unix(dt);
    if (date.format('DDD') === moment().format('DDD')) {
      return 'Today';
    }
    return date.format('ddd');
  }

  getDate(dt: number): string {
    return moment.unix(dt).format('MMM D');
  }

  getUVIValue(uvi: number): string {
    if (uvi < 3) {
      return 'Low';
    } else if (uvi < 6) {
      return 'Moderate';
    } else if (uvi < 8) {
      return 'High';
    } else if (uvi < 11) {
      return 'High';
    }
    return 'Extreme';
  }

  gettime(dt: number): string {
    return moment.unix(dt).format('HH:mm A');
  }
}
