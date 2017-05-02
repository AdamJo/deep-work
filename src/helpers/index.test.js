import {getHours, addComma, splitTime, formatDate, month, grabDate, hoursInDay, fieldHelper } from './index';

describe('tests getHours()', () => {
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
