import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import routes from 'routes';

const root = document.getElementById('app');

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <Router key={Math.random()} history={history} routes={routes} />
    </Provider>
  </AppContainer>
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
  module.hot.accept('routes', () => {
    require('routes');
    render(renderApp(), root);
  });
}
