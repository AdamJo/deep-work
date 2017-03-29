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

let day = new Date();
console.log(day.setDate(day.getDate() + 1));

const [first, last] = getWeek();
const defaultState = {
  currentUser: { email: null },
  chart: {
    format: '12',
    viewType: 'day',
    daySelected: date,
    weekSelected: {  
      first,
      last
    },
    monthSelected: 'Mar',
    workDates: {[formatDate(date)]: {}},
    // workDates: mockWorkDates,
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
