/**
 * retrieves total amount hours worked
 * @param {object} day - work days objects {0: 0, 1:1}
 * @param {bool} flag - checks if the work is deep or shallow for calculation
 * @return {number} the total number of work done that day
 */
export function getHours(day, flag) {
  if (day !== undefined) {
    if (!!Object.keys(day).length) {
      return flag ? day.deep : day.shallow;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

/**
 * format date to MM DD YY and add comma after date
 * @param {Date} day - day to be currently selected
 * @return {number} formated string
 */
export function addComma(day) {
  if (day) {
    day = day.toString().replace(/ 0/, ' ').split(' ');
    day[2] += ',';
    return day.slice(1, 4).join(' ');
  }
}

export function splitTime(day) {
  if (day) {
    day = day.toString().replace(/ 0/, ' ').split(' ');
    return day.slice(1, 3).join(' ');
  }
}

/**
 * format date to MM DD YY for database
 * @param {Date} day - day to be currently selected
 * @return {number} formated string
 */
export function formatDate(day) {
  if (day) {
    return day.toString().replace(/ 0/, ' ').split(' ').slice(1, 4).join(' ');
  }
}

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function grabDate(date) {
  const [month, day, year] = date.split(' ');
  return new Date(year, months.indexOf(month), day);
}

export const hoursInDay = {
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
};
