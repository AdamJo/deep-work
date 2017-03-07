import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

// Combine all our reducers togeher
const rootReducer = combineReducers({
  // add other reducers here.
  routing: routerReducer,
});
export default rootReducer;
