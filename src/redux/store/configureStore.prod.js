import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Saga from '../firebase/saga';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(Saga)
  return store;
}
