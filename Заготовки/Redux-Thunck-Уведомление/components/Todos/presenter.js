import React, { Fragment } from 'react';
import Form from './forma';

const Todos = ({ todos, onAddTodo }) => {
	return (
		<Fragment>
			<Form onAddTodo={onAddTodo} />

			<ul>
				{todos.map(todo => (
					<Todo key={todo.id} todo={todo} />
				))}
			</ul>
		</Fragment>
	);
};

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
