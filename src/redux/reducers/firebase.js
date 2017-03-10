import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  LOGIN_WITH_PROVIDER_FIREBASE_SUCCESS,
  LOGIN_WITH_PROVIDER_FIREBASE_FAILURE,
  FETCH_FIREBASE_USER,
  FETCH_FIREBASE_USER_SUCCESS,
  FETCH_FIREBASE_USER_FAILURE,
  UPDATE_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_FIREBASE_USER:
      return action.payload;
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
      return action.payload;
    case LOGOUT_FIREBASE_USER:
      return { finished: true, email: null };
    case UPDATE_FIREBASE_USER:
      return action.payload;
    case LOGIN_WITH_PROVIDER_FIREBASE:
      return action.payload;
    // case LOGIN_WITH_PROVIDER_FIREBASE_SUCCESS:
    //   if (action.user) {
    //     return {
    //       finished: true,
    //       ...action.user.providerData[0]
    //     };
    //   } else {
    //     return {
    //       finished: true,
    //     };
    //   }
    // case LOGIN_WITH_PROVIDER_FIREBASE_FAILURE:
    //   return action.payload;
    default:
      return state;
  }
}
