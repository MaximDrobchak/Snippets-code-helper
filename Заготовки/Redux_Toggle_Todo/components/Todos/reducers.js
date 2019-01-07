import * as actionsType from './constants';

const initialState = {
	todos: [
		{
			id: 0,
			name: 'Article 1',
			description: 'Lalalala Laslslala',
			completle: false,
		},
		{
			id: 1,
			name: 'Article 2',
			description: 'Lalalala Laslslala',
			completle: true,
		},
		{
			id: 2,
			name: 'Article 3',
			description: 'Lalalala Laslslala',
			completle: false,
		},
		{
			id: 3,
			name: 'Article 4',
			description: 'Lalalala Laslslala',
			completle: true,
		},
	],
};

const toggleReducer = (state = initialState.todos, action) => {
	switch (action.type) {
		case actionsType.TOGGLE_TODO: {
			return applyToggleTodo(state, action);
		}

		default:
			return state;
	}
};

const applyToggleTodo = (state, action) =>
	state.map(todo =>
		todo.id === action.todo.id
			? { ...todo, completed: !todo.completed }
			: todo,
	);

export default toggleReducer;
