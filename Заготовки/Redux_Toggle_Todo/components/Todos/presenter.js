import React from 'react';
import styled, { css } from 'styled-components';

const H4 = styled.h4`
	color: blue;

	${props =>
		props.completed &&
		css`
			text-decoration: line-through;
			color: red;
		`};
`;

const Todos = ({ todos, onToggleTodo }) => (
	<ul>
		{todos.map(todo => (
			<Todo
				key={todo.id}
				todo={todo}
				onToggleTodo={onToggleTodo}
			/>
		))}
	</ul>
);

const Todo = ({ todo, onToggleTodo }) => {
	const { name, id, description, completed } = todo;
	return (
		<li>
			<H4
				onClick={() => onToggleTodo(id)}
				completed={completed}
			>
				{name}
			</H4>
			<p>{description}</p>
		</li>
	);
};

export default Todos;
