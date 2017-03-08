import { call, put, takeLatest } from 'redux-saga/effects'
import FireBaseTools from './firebase'

// WORKER
// worker Saga: will be fired on FETCH_FIREBASE_USER actions
function* fetchUser(action) {
   try {
      const user = yield call(FireBaseTools.fetchUser, action.payload);
      yield put({type: "FETCH_FIREBASE_USER_SUCCESS", user: user});
   } catch (e) {
      yield put({type: "FETCH_FIREBASE_USER_FAILURE", message: e.message});
   }
}

// WATCHERS
function* mySaga() {
  yield takeLatest("FETCH_FIREBASE_USER", fetchUser);
}

export default mySaga;