import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }


  /**
   * Function to round the float to the nearest number
   * @param temp number to be rounded
   */
  getRoundValue(temp: number): number {
    return Math.round(temp);
  }

  /**
   * Format unix timestamp to HH:mm format to represent the time
   * @param dt unix timestamp
   */
  getHour(dt: number): string {
    return moment.unix(dt).format('HH:mm');

  }

  /**
   * Format unix timestamp to day of the week
   * @param dt unix timestamp
   */
  getDay(dt: number): string {
    const date = moment.unix(dt);
    if (date.format('DDD') === moment().format('DDD')) {
      return 'Today';
    }
    return date.format('ddd');
  }

  /**
   * Format unix timestamp to MMM D format to represent the date
   * @param dt unix timestamp
   */
  getDate(dt: number): string {
    return moment.unix(dt).format('MMM D');
  }


  /**
   * Convert UV Index to human readable string
   * @param uvi Ultraviolet Index
   */
  getUVIValue(uvi: number): string {
    if (uvi < 3) {
      return 'Low';
    } else if (uvi < 6) {
      return 'Moderate';
    } else if (uvi < 8) {
      return 'High';
    } else if (uvi < 11) {
      return 'Very High';
    }
    return 'Extreme';
  }

  /**
   * Format unix timestamp to Time format in HH:mm A
   * @param dt unix timestamp
   */
  gettime(dt: number): string {
    return moment.unix(dt).format('HH:mm A');
  }
}
