import {getHours, addComma, splitTime, formatDate, months, grabDate, hoursInDay, fieldHelper } from './index';

const testDate = new Date("Janurary 1, 2000 12:00:00");
const testHoursInDay = {
  0: 0,
  '0-5': 0,
  1: 0,
  '1-5': 0,
  2: 0,
  '2-5': 0,
  3: 0,
  '3-5': 0,
  4: 0,
  '4-5': 0,
  5: 0,
  '5-5': 0,
  6: 0,
  '6-5': 0,
  7: 0,
  '7-5': 0,
  8: 0,
  '8-5': 0,
  9: 0,
  '9-5': 0,
  10: 0,
  '10-5': 0,
  11: 0,
  '11-5': 0,
  12: 0,
  '12-5': 0,
  13: 0,
  '13-5': 0,
  14: 0,
  '14-5': 0,
  15: 0,
  '15-5': 0,
  16: 0,
  '16-5': 0,
  17: 0,
  '17-5': 0,
  18: 0,
  '18-5': 0,
  19: 0,
  '19-5': 0,
  20: 0,
  '20-5': 0,
  21: 0,
  '21-5': 0,
  22: 0,
  '22-5': 0,
  23: 0,
  '23-5': 0,
  'shallow': 0,
  'deep': 0,
};
const testShortDate = 'Jan 1 2000';

describe('getHours()', () => {
  it('returns nothing if undefined', () => {
    expect(getHours(undefined, true)).toBe(0)
  });
  it('returns deep hours', () => {
    expect(getHours({0:0, 1:1, 2:1, deep: .5, shallow: 1}, true)).toBe(.5);
  });
  it('returns shallow hours', () => {
    expect(getHours({0:0, 1:1, 2:1, deep: .5, shallow: 1}, false)).toBe(1);
  });
  it('returns 0 hours if empty (false flag)', () => {
    expect(getHours({}, false)).toBe(0);
  });
  it('returns 0 hours if empty (true flag)', () => {
    expect(getHours({}, true)).toBe(0);
  });
})

describe('addComma()', () => {
  it('returns "Unknown Date!" if incorrect parameter is passed', () => {
    expect(addComma('not a date object')).toBe('Unknown Date!')
  });
  it('returns splices the date into correct format', () => {
    expect(addComma(testDate)).toBe('Jan 1, 2000')
  });
})

describe('splitTime()', () => {
  it('returns "Unknown Date!" if incorrect parameter is passed', () => {
    expect(splitTime('not a date object')).toBe('Unknown Date!')
  });
  it('returns splices the date into correct format', () => {
    expect(splitTime(testDate)).toBe('Jan 1');
  });
})

describe('formatDate()', () => {
  it('returns "Unknown Date!" if incorrect parameter is passed', () => {
    expect(formatDate('not a date object')).toBe('Unknown Date!')
  });
  it('returns formatDate the date into correct format', () => {
    expect(formatDate(testDate)).toBe('Jan 1 2000');
  });
})

describe('grabDate()', () => {
  it('returns grabDate the date into correct format', () => {
    const [month, day, year] = testShortDate.split(' ');
    expect(grabDate(testShortDate).toString().split(' (').slice(0, -1).join(' ')).toBe('Sat Jan 01 2000 00:00:00 GMT-0800');
  });
  it('returns New Date wrong date is received', () => {
    expect(grabDate(new Date())).toBeTruthy();
  });
})

describe('constants', () => {
  describe('shortened dates', () => {
    it('should have all months shortned to 3 strings', () => {
      const shortenedMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      expect(shortenedMonths)
        .toEqual(expect.arrayContaining(months));
    });
    it('should have length of 12', () => {
      expect(months.length)
        .toEqual(12);
    });
  })
  describe('hoursInDay', () => {
    it('should have shallow key', () => {
      expect(testHoursInDay)
        .toEqual(hoursInDay);
    });
    it('should have shallow key', () => {
      expect(hoursInDay['shallow'])
        .toBe(0);
    });
    it('should have deep key', () => {
      expect(hoursInDay['deep'])
        .toBe(0);
    });
  });
})

