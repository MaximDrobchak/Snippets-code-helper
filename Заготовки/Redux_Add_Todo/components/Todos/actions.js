import * as actionsType from './constants';

export const doAddTodo = todo => ({
	type: actionsType.ADD_TODO,
	todo: { ...todo },
});
