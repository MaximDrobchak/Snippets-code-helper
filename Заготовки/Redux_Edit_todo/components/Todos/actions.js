import * as actionsType from './constants';

export const doAddTodo = todo => ({
	type: actionsType.ADD_TODO,
	todo: { ...todo },
});

export const doEditTodo = todo => ({
	type: actionsType.EDIT_TODO,
	todo: todo,
});
