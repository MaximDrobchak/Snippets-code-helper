import * as actionsType from '../constants';

export const doAddTodo = todo => ({
	type: actionsType.TODO_ADD,
	todo: { ...todo },
});

export const doToggleTodo = id => ({
	type: actionsType.TODO_TOGGLE,
	todo: { id },
});

export const doSetFilter = filter => ({
	type: actionsType.FILTER_SET,
	filter,
});
