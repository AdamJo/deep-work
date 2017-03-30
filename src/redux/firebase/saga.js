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
    if (user) {
      if (user.providerData[0]) {
        const path = `/users/${user.providerData[0].uid}/`;
        yield call(getUserInfo, {
          path,
          currentSettings: action['currentSettings'],
        });
      }
    }

    yield put({ type: 'FETCH_FIREBASE_USER_SUCCESS', user: user });
  } catch (e) {
    yield put({ type: 'FETCH_FIREBASE_USER_FAILURE', message: e.message });
  }
}

// worker Saga: will be fired on LOGIN_WITH_PROVIDER_FIREBASE actions
function* logUser(action) {
  try {
    const user = yield call(FireBaseTools.loginWithProvider, action.payload);
    if (user.user) {
      if (user.user.providerData[0]) {
        const path = `/users/${user.user.providerData[0].uid}/`;
        yield call(getUserInfo, {
          path,
          currentSettings: action['currentSettings'],
        });
      }
    }
    yield put({ type: 'FETCH_FIREBASE_USER_SUCCESS', user: user.user });
  } catch (e) {
    yield put({ type: 'FETCH_FIREBASE_USER_FAILURE', message: e.message });
  }
}

// worker Saga: will be fired on SET_USER_INFO actions
function* setUserInfo(action) {
  let saveInfo = Object.assign({}, action.payload);

  delete saveInfo['workHover'];
  delete saveInfo['daySelected'];
  delete saveInfo['monthSelected'];
  delete saveInfo['weekSelected'];
  delete saveInfo['viewType'];

  try {
    const saveUser = yield call(
      FireBaseTools.writeToUserDatabase,
      action.path,
      saveInfo,
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

    getUser['daySelected'] = action.currentSettings.daySelected;
    getUser['weekSelected'] = action.currentSettings.weekSelected;
    getUser['monthSelected'] = action.currentSettings.monthSelected;
    getUser['viewType'] = action.currentSettings.viewType;

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

function* watchCloseHover() {
  yield takeLatest('CLOSE_WORK_HOVER', setUserInfo);
}

export default function* Saga() {
  yield [
    fork(watchLogIn),
    fork(watchFetchUser),
    fork(watchGetUserInfo),
    fork(watchSetUserInfo),
    fork(watchCloseHover),
  ];
}
