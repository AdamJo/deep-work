import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from 'components/App';
import { HomePage } from 'components';

const root = document.getElementById('app');

const renderApp = () => (
  <Provider store={store}>
    <App><HomePage /></App>
  </Provider>
);

render(renderApp(), root);

if (process.env.NODE_ENV === 'production') {
  // cache all assets if browser supports serviceworker
  if ('serviceWorker' in navigator) {
    require('./service-worker');
  }
}

if (module.hot) {
  /**
    * Warning from React Router, caused by react-hot-loader.
    * The warning can be safely ignored, so filter it from the console.
    * Otherwise you'll see it every time something changes.
    * See https://github.com/gaearon/react-hot-loader/issues/298
    */
  const orgError = console.error;
  console.error = (...args) => {
    if (
      args &&
      args[0] &&
      typeof args[0] === 'string' &&
      args[0].indexOf('You cannot change <Router routes>;') > -1
    ) {
      // React route changed
    } else {
      // Log the error as normal
      orgError.apply(console, args);
    }
  };
  module.hot.accept('components/App', () => {
    render(renderApp(), root);
  });
}
