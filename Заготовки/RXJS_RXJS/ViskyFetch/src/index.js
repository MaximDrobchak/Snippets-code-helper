//https://dev.to/andrejnaumovski/async-actions-in-redux-with-rxjs-and-redux-observable-efg
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const appWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById('root'));
