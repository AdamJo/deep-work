import { createStore, applyMiddleware, compose } from 'redux'; 
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import configureStore from './configureStore';

const defaultState = {};

const store = configureStore(defaultState);

// we export history because we need it in root app to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

export default store;