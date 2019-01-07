import * as actionsType from './constants';

export const doAddTodo = todo => ({
	type: actionsType.ADD_TODO,
	todo: { ...todo },
});

export const doAddTodoWithNotification = todo => {
	return dispatch => {
		dispatch(doAddTodo(todo));

		setTimeout(() => {
			dispatch(doHideNotification(todo.id));
		}, 2500);
	};
};

const doHideNotification = id => ({
	type: actionsType.NOTIFICATION_HIDE,
	id,
});
