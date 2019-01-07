const VISIBILITY_FILTERS = {
	SHOW_COMPLETED: item => item.completed,
	SHOW_INCOMPLETED: item => !item.completed,
	SHOW_ALL: item => true,
};

export const getTodos = state =>
	state
		.map(todo => state[todo])
		.filter(VISIBILITY_FILTERS[state.filterState])
		.map(todo => todo.id);
