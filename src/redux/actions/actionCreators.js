import { UPDATE_DAY, TIME_FORMAT, CHART_VIEW } from './types'

import FireBaseTools from '../firebase/firebase';
// / FIREBASE AUTH ACTIONS
import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  FETCH_FIREBASE_USER,
  UPDATE_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,
} from './types';


/**
 * @param {Array<numbers>} hours array of numbers for amount of deep/shallow work
 * @param {Date}      day day being edited       
 */
export function updateDay(hours, day) {
  return {
    type: UPDATE_DAY,
    hours,
    day
  };
}

/**
 * @param {string} format toggle between military (24h) and civilian time (am / pm)
 */
export function timeFormat(format) {
  return {
    type: TIME_FORMAT,
    format,
  };
}

/**
 * @param {string} view show either day, week, month, year
 */
export function chartView(view) {
  return {
    type: CHART_VIEW,
    view
  };
}

// FIREBASE ACTIONS
export function loginWithProvider(provider) {
  const request = FireBaseTools.loginWithProvider(provider);
  return {
    type: LOGIN_WITH_PROVIDER_FIREBASE,
    payload: request,
  };
}

export function fetchUser() {
  const request = FireBaseTools.fetchUser();
  return {
    type: FETCH_FIREBASE_USER,
    payload: request,
  };
}

export function updateUser(user) {
  const request = FireBaseTools.updateUserProfile(user);
  return {
    type: UPDATE_FIREBASE_USER,
    payload: request,
  };
}

export function logoutUser(user) {
  const request = FireBaseTools.logoutUser(user);
  return {
    type: LOGOUT_FIREBASE_USER,
    payload: request,
  };
}
