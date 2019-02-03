import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/index';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
export default createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
