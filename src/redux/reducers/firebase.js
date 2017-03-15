import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  LOGIN_WITH_PROVIDER_FIREBASE_SUCCESS,
  LOGIN_WITH_PROVIDER_FIREBASE_FAILURE,
  FETCH_FIREBASE_USER,
  FETCH_FIREBASE_USER_SUCCESS,
  FETCH_FIREBASE_USER_FAILURE,
  UPDATE_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,
  SET_USER_INFO_SUCCESS,
  SET_USER_INFO_FAILURE,
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_FIREBASE_USER_SUCCESS:
      if (action.user) {
        return {
          finished: true,
          ...action.user.providerData[0],
        };
      } else {
        return {
          finished: true,
        };
      }
    case FETCH_FIREBASE_USER_FAILURE:
      return state;
    case LOGOUT_FIREBASE_USER:
      return { finished: true, email: null };
    case UPDATE_FIREBASE_USER:
      return action.payload;
    case LOGIN_WITH_PROVIDER_FIREBASE:
      return action.payload;
    case SET_USER_INFO_SUCCESS:
      return {
        ...state,
        save: action.save,
      };
    case SET_USER_INFO_FAILURE:
      return {
        ...state,
        save: action.save,
      };
    default:
      return state;
  }
}
