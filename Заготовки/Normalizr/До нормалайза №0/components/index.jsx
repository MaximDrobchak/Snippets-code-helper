import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import TodoCreate from './TodoCreate';
import Filter from './Filter';

const Todos = ({ todos }) => {
	const [visible, setVisible] = useState(false);

	const visibleForm = () => setVisible(!visible);

	return (
		<Fragment>
			<Filter />
			<hr />
			<button onClick={() => visibleForm()}>Create Todo</button>
			{visible && <TodoCreate />}

			<ul>
				{todos.map(todo => (
					<Todo key={todo.id} todo={todo} />
				))}
			</ul>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	todos: state.todoState,
});

export default connect(mapStateToProps)(Todos);
