import { combineReducers } from 'redux';

import {
	todoReducer,
	notificationReducer,
} from '../components/Todos/reducers';

export default combineReducers({
	todoState: todoReducer,
	notificationState: notificationReducer,
});
