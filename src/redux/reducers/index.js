import { combineReducers } from 'redux';

// import { routerReducer } from 'react-router-redux';

import FireBaseUserReducer from './firebase';
import Chart from './chart';

// Combine all our reducers togeher
const rootReducer = combineReducers({
  // add other reducers here.
  currentUser: FireBaseUserReducer,
  chart: Chart,
  // routing: routerReducer,
});

export default rootReducer;
