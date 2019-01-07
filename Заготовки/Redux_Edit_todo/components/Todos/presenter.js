import React, { Fragment } from 'react';
import Form from './forma';
import EditTodo from './editTodo';

const Todos = ({ todos, onAddTodo, onEditTodo }) => {
	return (
		<Fragment>
			<Form onAddTodo={onAddTodo} />

			<ul>
				{todos.map(todo => (
					<Todo
						key={todo.id}
						todo={todo}
						onEditTodo={onEditTodo}
					/>
				))}
			</ul>
		</Fragment>
	);
};

const Todo = ({ todo, onEditTodo }) => {
	const { name, description } = todo;

	return (
		<li>
			<EditTodo todo={todo} onEditTodo={onEditTodo} />
			<h4>{name}</h4>
			<p>{description}</p>
		</li>
	);
};

export default Todos;
