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