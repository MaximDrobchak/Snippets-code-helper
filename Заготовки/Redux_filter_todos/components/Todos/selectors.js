import * as actionsType from './constants';
export const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case actionsType.SHOW_ALL:
			return todos;
		case actionsType.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case actionsType.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
};
