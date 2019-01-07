import { combineReducers } from 'redux';

import todoReducer from '../components/Todos/reducers';

export default combineReducers({
	todoState: todoReducer,
});
