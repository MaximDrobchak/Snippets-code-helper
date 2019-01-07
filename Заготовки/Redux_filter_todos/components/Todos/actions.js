import * as actionsType from './constants';

export const doSetFilter = filter => ({
	type: actionsType.SET_TODO_FILTER,
	filter,
});
