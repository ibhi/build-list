import { Pipe, PipeTransform } from '@angular/core';

/*
 * Coverts the provided number (epoch timestamp in seconds) to date format
 * Takes no argument.
 * Usage:
 *   value | epochDate
 * Example:
 *   {{ 1460889960 |  exponentialStrength:10}}
 *   formats to: Sun Apr 17 2016 16:16:00 GMT+0530 (IST)
*/

@Pipe({
  name: 'epochDate'
})
export class EpochDatePipe implements PipeTransform {

  transform(value: number | string): Date {
    let date: Date = new Date(0);
    date.setUTCSeconds(+value);
    return date;
  }

}
