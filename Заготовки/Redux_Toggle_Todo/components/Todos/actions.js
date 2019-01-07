import * as actionsType from './constants';

export const doToggleTodo = id => ({
	type: actionsType.TOGGLE_TODO,
	todo: { id },
});
