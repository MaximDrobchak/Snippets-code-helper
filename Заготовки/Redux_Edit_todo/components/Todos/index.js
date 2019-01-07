import React from 'react';
import { connect } from 'react-redux';
import { doAddTodo, doEditTodo } from './actions';

import Todos from './presenter';

const App = ({ todos, onAddTodo, onEditTodo }) => (
	<Todos
		todos={todos}
		onAddTodo={onAddTodo}
		onEditTodo={onEditTodo}
	/>
);

const mapStateToProps = state => ({
	todos: state.todoState,
});

const mapDispatchToProps = dispatch => ({
	onAddTodo: todo => dispatch(doAddTodo(todo)),
	onEditTodo: todo => dispatch(doEditTodo(todo)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
