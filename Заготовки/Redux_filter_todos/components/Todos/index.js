import React from 'react';
import { connect } from 'react-redux';
import { doSetFilter } from './actions';
import { getVisibleTodos } from './selectors';
import Todos from './presenter';

const App = ({ todos, onSetFilter }) => (
	<Todos todos={todos} onSetFilter={onSetFilter} />
);

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todoState, state.filterState),
});

const mapDispatchToProps = dispatch => ({
	onSetFilter: filterType => dispatch(doSetFilter(filterType)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
