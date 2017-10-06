import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'formatTime' })
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    return this.formatTime(value);
  }

  formatTime(s: number) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
    return this.addZero(hrs) + ':' + this.addZero(mins);
  }

  addZero(unitTime) {
    const unitTimeStr = unitTime.toString();
    if (unitTimeStr.length === 1) {
      return '0' + unitTimeStr;
    }
    return unitTimeStr;
  }
}