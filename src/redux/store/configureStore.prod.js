import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../firebase/saga';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(mySaga)
  return store;
}
