import React from 'react';
import { connect } from 'react-redux';
import { doToggleTodo } from './actions';

import Todos from './presenter';

const App = ({ todos, onToggleTodo }) => (
	<Todos todos={todos} onToggleTodo={onToggleTodo} />
);

const mapStateToProps = state => ({
	todos: state.todoState,
});

const mapDispatchToProps = dispatch => ({
	onToggleTodo: id => dispatch(doToggleTodo(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
