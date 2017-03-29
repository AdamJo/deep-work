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
