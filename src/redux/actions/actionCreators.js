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
  SET_USER_INFO,
  GET_USER_INFO,
  TOGGLE_MENU,
} from './types';

/**
 * @param {Array<numbers>} hours array of numbers for amount of deep/shallow work
 * @param {Date}      day day being edited       
 */
export function updateWorkDate(hours, date) {
  return {
    type: UPDATE_WORK_DATE,
    workDates: {[date]: hours},
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

export function closeWorkHover() {
  return {
    type: CLOSE_WORK_HOVER,
  };
}

export function workHourRange(range) {
  return {
    type: WORK_HOUR_RANGE,
    hourRange: { min: range[0], max: range[1] },
  };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  }
}

// FIREBASE ACTIONS
export function loginWithProvider(provider) {
  return {
    type: LOGIN_WITH_PROVIDER_FIREBASE,
    payload: provider,
  };
}

export function fetchUser() {
  return {
    type: FETCH_FIREBASE_USER,
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

export function setUserInfo(path, payload) {
  return {
    type: SET_USER_INFO,
    path,
    payload,
  };
}

export function getUserInfo(path) {
  return {
    type: GET_USER_INFO,
    path,
  };
}
