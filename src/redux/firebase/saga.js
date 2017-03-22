import {
  call,
  put,
  fork,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import FireBaseTools from './firebase';

// === WORKERS ===

// worker Saga: will be fired on FETCH_FIREBASE_USER actions
function* fetchUser(action) {
  try {
    const user = yield call(FireBaseTools.fetchUser);
    yield put({ type: 'FETCH_FIREBASE_USER_SUCCESS', user: user });
  } catch (e) {
    yield put({ type: 'FETCH_FIREBASE_USER_FAILURE', message: e.message });
  }
}

// worker Saga: will be fired on LOGIN_WITH_PROVIDER_FIREBASE actions
function* logUser(action) {
  try {
    const user = yield call(FireBaseTools.loginWithProvider, action.payload);
    yield put({ type: 'FETCH_FIREBASE_USER_SUCCESS', user: user.user });
  } catch (e) {
    yield put({ type: 'FETCH_FIREBASE_USER_FAILURE', message: e.message });
  }
}

// worker Saga: will be fired on SET_USER_INFO actions
function* setUserInfo(action) {
  delete action.payload.workHover;
  try {
    const saveUser = yield call(
      FireBaseTools.writeToUserDatabase,
      action.path,
      action.payload,
    );
    yield put({ type: 'SET_USER_INFO_SUCCESS', save: true });
  } catch (e) {
    yield put({
      type: 'SET_USER_INFO_FAILURE',
      message: e.message,
      save: false,
    });
  }
}

// worker Saga: will be fired on GET_USER_INFO actions
function* getUserInfo(action) {
  try {
    const getUser = yield call(FireBaseTools.getUserInfo, action.path);
    if (getUser.workDates === undefined) {
      getUser.workDates = {};
    }
    yield put({ type: 'GET_USER_INFO_SUCCESS', userData: getUser });
  } catch (e) {
    yield put({
      type: 'GET_USER_INFO_FAILURE',
      message: e.message,
      userInfo: getUserInfo,
    });
  }
}

// === WATCHERS ===
function* watchFetchUser() {
  yield takeLatest('FETCH_FIREBASE_USER', fetchUser);
}

function* watchLogIn() {
  yield takeLatest('LOGIN_WITH_PROVIDER_FIREBASE', logUser);
}

function* watchSetUserInfo() {
  yield takeLatest('SET_USER_INFO', setUserInfo);
}

function* watchGetUserInfo() {
  yield takeLatest('GET_USER_INFO', getUserInfo);
}

export default function* Saga() {
  yield [
    fork(watchLogIn),
    fork(watchFetchUser),
    fork(watchGetUserInfo),
    fork(watchSetUserInfo),
  ];
}
