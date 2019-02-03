import { applyMiddleware, combineReducers, compose } from 'redux';
import reduxLogger from 'redux-logger';
import { createStore } from 'react-hooks-global-state';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';
// import { initialState, counterReducer } from './reducer';
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const reducer = combineReducers({
  counter: counterReducer,
});

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(reduxLogger), reduxDevToolsExt()),
);
