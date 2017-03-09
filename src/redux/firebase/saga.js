import { call, put, fork, take, takeEvery, takeLatest } from 'redux-saga/effects'
import FireBaseTools from './firebase'

// WORKER
// worker Saga: will be fired on FETCH_FIREBASE_USER actions
function* fetchUser(action) {
   try {
      const user = yield call(FireBaseTools.fetchUser, [action.payload]);
      yield put({type: "FETCH_FIREBASE_USER_SUCCESS", user: user});
   } catch (e) {
      yield put({type: "FETCH_FIREBASE_USER_FAILURE", message: e.message});
   }
}

function* logUser(action) {
   try {
      const user = yield call(FireBaseTools.loginWithProvider, action.payload);
      yield put({type: "FETCH_FIREBASE_USER_SUCCESS", user: user.user});
   } catch (e) {
      yield put({type: "FETCH_FIREBASE_USER_FAILURE", message: e.message});
   }
}

// WATCHERS
function* watchFetchUser() {
  yield takeLatest ("FETCH_FIREBASE_USER", fetchUser);
}

// WATCHERS
function* watchLogIn() {
  yield takeLatest ("LOGIN_WITH_PROVIDER_FIREBASE", logUser);
}

export default function* Saga() {
    yield [
        fork(watchLogIn),
        fork(watchFetchUser)
    ];
}