// chart specific actions
import {
  UPDATE_TIME_FORMAT,
  TIME_FORMAT,
  CHART_VIEW,
  WORK_HOUR_RANGE,
  UPDATE_WORK_DATE,
  OPEN_WORK_HOVER,
  CLOSE_WORK_HOVER,
  SUBTRACT_DAY,
  ADD_DAY,
  SUBTRACT_WEEK,
  ADD_WEEK,
  ADD_MONTH,
  SUBTRACT_MONTH,
  TOGGLE_MENU,
  SWITCH_TO_DATE,
} from './types';

import FireBaseTools from '../firebase/firebase';
// firebase specific actions
import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  FETCH_FIREBASE_USER,
  FETCH_FIREBASE_USER_SUCCESS,
  FETCH_FIREBASE_USER_FAILURE,
  UPDATE_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,
  SET_USER_INFO,
  GET_USER_INFO,
} from './types';

/**
 * @param {Array<numbers>} hours array of numbers for amount of deep/shallow work
 * @param {Date}      day day being edited       
 */
export function updateWorkDate(hours, date) {
  return {
    type: UPDATE_WORK_DATE,
    date,
    hours,
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

export function closeWorkHover(path, payload) {
  return {
    type: CLOSE_WORK_HOVER,
    path,
    payload,
  };
}

export function toggleMenu(path, payload) {
  return {
    type: TOGGLE_MENU,
    path,
    payload,
  };
}

export function workHourRange(range) {
  return {
    type: WORK_HOUR_RANGE,
    hourRange: { min: range[0], max: range[1] },
  };
}

export function addDay(day) {
  return {
    type: ADD_DAY,
    day,
  };
}

export function subtractDay(day) {
  return {
    type: SUBTRACT_DAY,
    day,
  };
}

export function addWeek(week) {
  return {
    type: ADD_WEEK,
    week,
  };
}

export function subtractWeek(week) {
  return {
    type: SUBTRACT_WEEK,
    week,
  };
}

export function addMonth(day) {
  return {
    type: ADD_MONTH,
    day,
  };
}

export function subtractMonth(day) {
  return {
    type: SUBTRACT_MONTH,
    day,
  };
}

export function swapToDate(date) {
  return {
    type: SWITCH_TO_DATE,
    date,
  };
}

// FIREBASE ACTIONS
/**
 * @param {string} provider which host the user should log into ( google, github, etc...)
 */
export function loginWithProvider(provider, currentSettings) {
  return {
    type: LOGIN_WITH_PROVIDER_FIREBASE,
    payload: provider,
    currentSettings,
  };
}

export function fetchUser(currentSettings) {
  return {
    type: FETCH_FIREBASE_USER,
    currentSettings,
  };
}

export function updateUser(user) {
  const request = FireBaseTools.updateUserProfile(user);
  return {
    type: UPDATE_FIREBASE_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = FireBaseTools.logoutUser();
  return {
    type: LOGOUT_FIREBASE_USER,
    payload: request,
  };
}

/**
 * @param {string} path where the information should go to the backend
 * @param {object} payload chart type of user
 */
export function setUserInfo(path, payload) {
  return {
    type: SET_USER_INFO,
    path,
    payload,
  };
}

/**
 * @param {string} path where the information should go to the backend
 */
export function getUserInfo(path, currentSettings) {
  return {
    type: GET_USER_INFO,
    path,
    currentSettings,
  };
}
