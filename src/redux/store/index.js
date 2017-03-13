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
    date,
    workHover: true,
  },
};

const store = configureStore(defaultState);

// we export history because we need it in root app to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
