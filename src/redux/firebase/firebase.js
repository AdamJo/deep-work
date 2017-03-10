import * as Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAXB1uhTyi78vXT5d7x5SE_uO4ChA8dStc',
  authDomain: 'deep-work-34bed.firebaseapp.com',
  databaseURL: 'https://deep-work-34bed.firebaseio.com',
};

export const firebaseApp = Firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

const FireBaseTools = {
  /**
   * Return an instance of a firebase auth provider based on the provider string.
   *
   * @param provider
   * @returns {Firebase.auth.AuthProvider}
   */
  getProvider: provider => {
    switch (provider) {
      case 'facebook':
        return new Firebase.auth.FacebookAuthProvider();
      case 'github':
        return new Firebase.auth.GithubAuthProvider();
      case 'google':
        return new Firebase.auth.GoogleAuthProvider();
      case 'twitter':
        return new Firebase.auth.TwitterAuthProvider();
      default:
        throw new Error('Provider is not supported!!!');
    }
  },

  /**
   * Login with provider => p is provider "email", "facebook", "github", "google", or "twitter"
   * Uses Popup therefore provider must be an OAuth provider. EmailAuthProvider will throw an error
   *
   * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
   */
  loginWithProvider: p => {
    const provider = FireBaseTools.getProvider(p);
    return firebaseAuth
      .signInWithPopup(provider)
      .then(firebaseAuth.currentUser)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message,
      }));
  },
  /**
   * Sign the user out
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  logoutUser: () => firebaseAuth.signOut().then(() => ({
    success: 1,
    message: 'logout',
  })),

  /**
   * Update a user's profile data
   *
   * @param u
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  updateUserProfile: u => firebaseAuth.currentUser.updateProfile(u).then(
    () => firebaseAuth.currentUser,
    error => ({
      errorCode: error.code,
      errorMessage: error.message,
    }),
  ),

  /**
   * Retrieve the current user (Promise)
   * @returns {Promise}
   */
  fetchUser: () => new Promise((resolve, reject) => {
    const unsub = firebaseAuth.onAuthStateChanged(
      user => {
        unsub();
        resolve(user);
      },
      error => {
        reject(error);
      },
    );
  }),
  /**
   * Get the firebase database reference.
   *
   * @param path {!string|string}
   * @returns {!firebase.database.Reference|firebase.database.Reference}
   */
  getDatabaseReference: path => firebaseDb.ref(path),
};

export default FireBaseTools;
