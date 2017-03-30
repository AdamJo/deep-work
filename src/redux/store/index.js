import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import configureStore from './configureStore';

import { formatDate } from 'helpers';

import mockWorkDates from 'mockData/mockWorkDates';
//todo testing
let date = new Date();
// date = date.toString().split(' ').slice(1, 4).join(' ');

const getWeek = () => {
  // http://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-week-in-javascript
  let curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

  const last = first + 6; // last day is the first day + 6

  const firstDay = new Date(curr.setDate(first))

  const lastDay = new Date(curr.setDate(last))

  return [firstDay, lastDay];
};

/**
 * determines the color of either deep or shallow work
 * @return {string} first day of the month
 * @return {string} last day of the month
 * @return {Array<string>} list of all months between first and last
 */
const getMonth = () => {
  const curr = new Date();
  const first = new Date(curr.getFullYear(), curr.getMonth(), 1)

  const last = new Date(curr.getFullYear(), curr.getMonth() + 1, 0)

  return [first, last];
};

const [firstDayWeek, lastDayWeek] = getWeek();
const [firstDayMonth, lastDayMonth] = getMonth();
const defaultState = {
  currentUser: { email: null },
  chart: {
    format: '12',
    viewType: 'month',
    daySelected: date,
    weekSelected: {  
      first: firstDayWeek,
      last: lastDayWeek,
    },
    monthSelected: {
      first: firstDayMonth,
      last: lastDayMonth,
      currentMonth: date.getMonth()
    },
    // workDates: {[formatDate(date)]: {}},
    workDates: mockWorkDates,
    workHover: false,
    hourRange: {
      min: 1,
      max: 14,
    },
    menu: false,
  },
};

const store = configureStore(defaultState);

// we export history because we need it in root app to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
