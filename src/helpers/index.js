/**
 * retrieves total amount hours worked
 * @param {object} day - work days objects {0: 0, 1:1}
 * @param {bool} flag - checks if the work is deep or shallow for calculation
 * @return {number} the total number of work done that day
 */
export function getHours(day, flag) {
  if (day !== undefined && typeof day === 'object' && typeof flag === 'boolean') {
    if (!!Object.keys(day).length) {
      if (flag && day.hasOwnProperty("deep")) {
          return day.deep;
      } else if (!flag && day.hasOwnProperty("shallow")) {
          return day.shallow;
      }
    }
  }
  return 0;
}

/**
 * format date to MM DD YY and add comma after date
 * @param {Date} day - day to be currently selected
 * @return {number} formated string
 */
export function addComma(day) {
  if (day && typeof day === 'object' && day instanceof Date) {
    day = day.toString().replace(/ 0/, ' ').split(' ');
    day[2] += ',';
    return day.slice(1, 4).join(' ');
  } else {
    return 'Unknown Date!'
  }
}

export function splitTime(day) {
  if (day && typeof day === 'object' && day instanceof Date) {
    day = day.toString().replace(/ 0/, ' ').split(' ');
    return day.slice(1, 3).join(' ');
  } else {
    return 'Unknown Date!'
  }
}

/**
 * format date to MM DD YY for database
 * @param {Date} day - day to be currently selected
 * @return {number} formated string
 */
export function formatDate(day) {
  if (day && typeof day === 'object' && day instanceof Date) {
    return day.toString().replace(/ 0/, ' ').split(' ').slice(1, 4).join(' ');
  } else {
    return 'Unknown Date!';
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

/**
 * gets the current date the user selects
 * @param {Date} date - day to be currently selected
 * @return {Date} newly formated date
 */
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

/**
 * Grabs total hours worked per day
 * @param {object} row - individual hours worked per day.
 * @param {object} field - list of hours worked from user
 * @return {string} total hours of deep and shallow worked.
 */
export function fieldHelper(row = {}, field) {
  const mergedHours = Object.assign(hoursInDay, row[field['label']]);
  const finalKey = Object.assign(hoursInDay, row[field['label']]);
  let arr = [];
  let limited = `${row[field['label']]['deep']} ${row[field['label']]['shallow']}`;

  if (
    (typeof row[field['label']]['deep'] !== 'undefined', typeof row[
      field['label']
    ]['shallow'] !== 'undefined')
  ) {
    limited = `${row[field['label']]['deep']}%20${row[field['label']]['shallow']}`;
  } else {
    limited = `0%200`;
  }

  // grabs all hours numbers
  // const newArr = arr.map((data, index) => finalKey[data]);
  // if (field['label'] === 'Apr 1 2017') {
  //   for (let key of Object.keys(mergedHours)) {
  //     if (key.includes('-')) {
  //       arr.push(parseFloat(key.replace('-', '.')));
  //     } else if (!isNaN(parseInt(key))) {
  //       arr.push(parseInt(key));
  //     }
  //   }
  //   arr.sort((a, b) => a-b);
  //   arr.push('deep')
  //   arr.push('shallow');

  //   arr.forEach((data, index) => {
  //     arr[index] = mergedHours[data.toString().replace('.', '-')];
  //   })
  // }
  return limited;
  // return JSON.stringify(mergedHours).replace(/,/g, ' ').replace(/({|})/g, '').replace(/-/g, '.');
}

const json2csv = require('json2csv');
/**
 * converts an object into csv format
 * @param {Date} workDates - day to be currently selected
 * @return {string} CSV formated string
 */
export function convertToCSV(workDates) {
  if (workDates) {
    let fields = [];
    let fieldNames = [];

    for (let [key, value] of Object.entries(workDates)) {
      fields.push({
        label: key,
        value: function(row, field) {
          return fieldHelper(row, field);
        },
      });
      fieldNames.push(key.replace(/ /g, '%20'));
    }
    const result = json2csv({
      data: workDates,
      fields,
      fieldNames,
      // quotes: '',
    });
    return result;
  }
}
