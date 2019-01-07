import * as actionsType from '../constants';

const todos = [
	{
		id: '1',
		name: 'Redux Standalone with advanced Actions',
		completed: false,
	},
	{ id: '2', name: 'Redux Actions', completed: true },
];

export default (state = todos, action) => {
	switch (action.type) {
		case actionsType.TODO_ADD: {
			return applyAddTodo(state, action);
		}
		case actionsType.TODO_TOGGLE: {
			return applyToggleTodo(state, action);
		}
		default:
			return state;
	}
};

const applyAddTodo = (state, action) => {
	const todo = { ...action.todo, completed: false };
	return [...state, todo];
};

const applyToggleTodo = (state, action) =>
	state.map(todo =>
		todo.id === action.todo.id
			? { ...todo, completed: !todo.completed }
			: todo,
	);
