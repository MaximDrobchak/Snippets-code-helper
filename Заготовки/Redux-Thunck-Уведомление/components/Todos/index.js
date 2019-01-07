// https://github.com/taming-the-state-in-react/taming-the-state-in-react-portuguese/blob/master/manuscript/05-redux-advanced/00b-redux-async-actions.md
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { doAddTodoWithNotification } from './actions';
import { getNotifications } from './selectors';

import Todos from './presenter';
import Notifications from './Notifications';

const App = ({ todos, onAddTodo, notifications }) => (
	<Fragment>
		<Notifications notifications={notifications} />
		<Todos todos={todos} onAddTodo={onAddTodo} />
	</Fragment>
);

const mapStateToProps = state => ({
	todos: state.todoState,
	notifications: getNotifications(state.notificationState),
});

const mapDispatchToProps = dispatch => ({
	onAddTodo: todo => dispatch(doAddTodoWithNotification(todo)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
