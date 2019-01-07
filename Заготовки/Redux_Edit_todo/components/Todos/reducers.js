import * as actionsType from './constants';

const initialState = {
	todos: [
		{
			id: 0,
			name: 'Ferst Article',
			description:
				'Ferst ArticleFerst ArticleFerst ArticleFerst ArticleFerst Article',
		},
		{
			id: 1,
			name: 'Sucsses Article',
			description:
				'Sucsses ArticleSucsses ArticleSucsses ArticleSucsses ArticleSucsses ArticleSucsses Article',
		},
	],
};

const todoReducer = (state = initialState.todos, action) => {
	switch (action.type) {
		case actionsType.ADD_TODO: {
			return applyAddTodo(state, action);
		}
		case actionsType.EDIT_TODO: {
			return applyEditTodo(state, action);
		}
		default:
			return state;
	}
};

const applyAddTodo = (state, action) => [...state, action.todo];

const applyEditTodo = (state, action) => {
	const { name, description } = action.todo;
	return state.map(todo =>
		todo.id === action.todo.id
			? { ...todo, name, description }
			: todo,
	);
};

export default todoReducer;
