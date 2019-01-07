//https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import store, { action } from './store';

function render (){
  ReactDOM.render(
    <App
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root'),
  );
}

render();
store.subscribe(render);
