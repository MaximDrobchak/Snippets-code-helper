import { FILTER_SET } from '../constants';

export default (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case FILTER_SET: {
			return applySetFilter(state, action);
		}
		default:
			return state;
	}
};

const applySetFilter = (state, action) => action.filter;
