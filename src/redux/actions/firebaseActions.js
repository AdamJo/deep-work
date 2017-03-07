import FireBaseTools from '../firebase/firebase';

// / FIREBASE AUTH ACTIONS
const LOGIN_WITH_PROVIDER_FIREBASE = 'LOGIN_WITH_PROVIDER_FIREBASE';
const FETCH_FIREBASE_USER = 'FETCH_FIREBASE_USER';
const UPDATE_FIREBASE_USER = 'UPDATE_FIREBASE_USER';
const LOGOUT_FIREBASE_USER = 'LOGOUT_FIREBASE_USER';


export function loginWithProvider(provider) {
    const request = FireBaseTools.loginWithProvider(provider);
    return {
        type: LOGIN_WITH_PROVIDER_FIREBASE,
        payload: request,
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