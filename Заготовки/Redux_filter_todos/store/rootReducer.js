import { combineReducers } from 'redux';

import {
	todoReducer,
	filterReducer,
} from '../components/Todos/reducers';

export default combineReducers({
	todoState: todoReducer,
	filterState: filterReducer,
});
