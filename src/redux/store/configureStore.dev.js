import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import mySaga from '../firebase/saga'
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  const sagaMiddleware = createSagaMiddleware();
  const enhancers = compose(
    applyMiddleware(sagaMiddleware, createLogger(),),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );

  const store = createStore(rootReducer, initialState, enhancers);
  sagaMiddleware.run(mySaga)
  if (module.hot) {
    module.hot.accept('../reducers/', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
