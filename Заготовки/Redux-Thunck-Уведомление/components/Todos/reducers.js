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

		default:
			return state;
	}
};

const applyAddTodo = (state, action) => [...state, action.todo];

const notificationReducer = (state = {}, action) => {
	switch (action.type) {
		case actionsType.ADD_TODO: {
			return applySetNotifyAboutAddTodo(state, action);
		}
		case actionsType.NOTIFICATION_HIDE: {
			return applyRemoveNotification(state, action);
		}
		default:
			return state;
	}
};

const applySetNotifyAboutAddTodo = (state, action) => ({
	...state,
	[action.todo.id]: 'Todo Created: ' + action.todo.name,
});

const applyRemoveNotification = (state, action) => {
	const {
		[action.id]: notificationToRemove,
		...restNotifications
	} = state;
	return restNotifications;
};
export { todoReducer, notificationReducer };
