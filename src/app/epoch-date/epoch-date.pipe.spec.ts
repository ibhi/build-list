/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { EpochDatePipe } from './epoch-date.pipe';

describe('Pipe: EpochDate', () => {
  let pipe = new EpochDatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms epoch seconds to date object', () => {
    let date = 1460889960;
    let expectedDate = new Date(0);
    expectedDate.setUTCSeconds(date);
    expect(pipe.transform(date)).toEqual(expectedDate);
  });

  it('transforms epoch seconds in string format to date object', () => {
    let date = '1460889960';
    let expectedDate = new Date(0);
    expectedDate.setUTCSeconds(+date);
    expect(pipe.transform(date)).toEqual(expectedDate);
  });

});
