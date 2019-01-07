import React from 'react';
import { connect } from 'react-redux';
import { doAddTodo } from './actions';

import Todos from './presenter';

const App = ({ todos, onAddTodo }) => (
	<Todos todos={todos} onAddTodo={onAddTodo} />
);

const mapStateToProps = state => ({
	todos: state.todoState,
});

const mapDispatchToProps = dispatch => ({
	onAddTodo: todo => dispatch(doAddTodo(todo)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
