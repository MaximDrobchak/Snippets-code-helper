import * as actionsType from './constants';

const initialState = {
	todos: [
		{
			id: 0,
			name: 'Article 1',
			description: 'Lalalala Laslslala',
			completed: false,
		},
		{
			id: 1,
			name: 'Article 2',
			description: 'Lalalala Laslslala',
			completed: true,
		},
		{
			id: 2,
			name: 'Article 3',
			description: 'Lalalala Laslslala',
			completed: false,
		},
		{
			id: 3,
			name: 'Article 4',
			description: 'Lalalala Laslslala',
			completed: true,
		},
	],
};

const todoReducer = (state = initialState.todos, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const filterReducer = (
	state = (initialState.todos.filterState = 'SHOW_ALL'),
	action,
) => {
	switch (action.type) {
		case actionsType.SET_TODO_FILTER: {
			return action.filter;
		}
		default:
			return state;
	}
};

export { filterReducer, todoReducer };
