import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    module.hot.accept('../reducers/', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
