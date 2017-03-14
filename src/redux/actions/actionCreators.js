import {
  UPDATE_TIME_FORMAT,
  TIME_FORMAT,
  CHART_VIEW,
  WORK_HOUR_RANGE,
  UPDATE_WORK_DATE,
  OPEN_WORK_HOVER,
  CLOSE_WORK_HOVER,
} from './types';

import FireBaseTools from '../firebase/firebase';
// / FIREBASE AUTH ACTIONS
import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  FETCH_FIREBASE_USER,
  FETCH_FIREBASE_USER_SUCCESS,
  FETCH_FIREBASE_USER_FAILURE,
  UPDATE_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,
} from './types';

/**
 * @param {Array<numbers>} hours array of numbers for amount of deep/shallow work
 * @param {Date}      day day being edited       
 */
export function updateWorkDate(hours, date) {
  return {
    type: UPDATE_WORK_DATE,
    hours,
    date,
  };
}

/**
 * @param {string} format toggle between military (24h) and civilian time (am / pm)
 */
export function updateTimeFormat(format) {
  return {
    type: UPDATE_TIME_FORMAT,
    format,
  };
}

/**
 * @param {string} view show either day, week, month, year
 */
export function chartView(view) {
  return {
    type: CHART_VIEW,
    view,
  };
}

export function openWorkHover() {
  return {
    type: OPEN_WORK_HOVER,
  };
}

export function closeWorkHover(hours, date) {
  return {
    type: CLOSE_WORK_HOVER,
    hours,
    date,
  };
}

export function workHourRange(min, max) {
  return {
    type: WORK_HOUR_RANGE,
    hourRange: [min, max],
  };
}

// FIREBASE ACTIONS
export function loginWithProvider(provider) {
  return {
    type: LOGIN_WITH_PROVIDER_FIREBASE,
    payload: provider,
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
