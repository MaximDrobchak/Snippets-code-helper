import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

import thunk from 'redux-thunk';
const logger = createLogger();

export default createStore(
	rootReducer,
	undefined,
	applyMiddleware(thunk, logger),
);
