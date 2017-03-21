import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import configureStore from './configureStore';

//todo testing
let date = new Date();
date = date.toString().split(' ').slice(0, 4).join(' ');

const defaultState = {
  currentUser: { email: null },
  chart: {
    format: '12',
    viewType: 'day',
    date: {
        [date]: {
            deep: {8.5: 1, 9:1},
            shallow: {9.5: 1, 10:1},
          }
    },
    workHover: false,
    hourRange: {
      min: 8,
      max: 18,
    },
    hours: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    menu: false,
  }
};

const store = configureStore(defaultState);

// we export history because we need it in root app to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
