import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  FETCH_FIREBASE_USER,
  UPDATE_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_FIREBASE_USER:
      return action.payload;
    case LOGOUT_FIREBASE_USER:
      return action.payload;
    case UPDATE_FIREBASE_USER:
      return action.payload;
    case LOGIN_WITH_PROVIDER_FIREBASE:
      return action.payload;
    default:
      return state;
  }
}
