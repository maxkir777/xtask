import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import { configureStore, history } from './store/configureStore';

const mountApp = document.getElementById('root');
const store = configureStore();

// TODO: Add loading
if (mountApp) {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, mountApp,
  );
}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  // const { whyDidYouUpdate } = require('why-did-you-update');
  // whyDidYouUpdate(React);

  // eslint-disable-next-line global-require
  const showDevTools = require('./reduxDevTools/showDevTools').default;
  showDevTools(store);
}
