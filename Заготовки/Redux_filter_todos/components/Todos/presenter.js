import React, { Fragment } from 'react';
import Filter from './Filter';

const Todos = ({ todos, onSetFilter }) => (
	<Fragment>
		<Filter onSetFilter={onSetFilter} />

		<ul>
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
	</Fragment>
);

const Todo = ({ todo }) => {
	const { name, description } = todo;

	return (
		<li>
			<h4>{name}</h4>
			<p>{description}</p>
		</li>
	);
};

export default Todos;
