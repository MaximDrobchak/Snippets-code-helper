import React from 'react';
import { denormalize, schema } from 'normalizr';

const todoSchema = new schema.Entity('todos');
const todosSchema = { todos: [todoSchema] };

function TodoList({ todos }) {
	return (
		<div>
			{todos.map(todo => (
				<ConnectedTodoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
}

function getTodos(state) {
	const entities = state.todoState.entities;
	const ids = state.todoState.ids;
	return denormalize(ids, [todoSchema], entities);
}

function mapStateToProps(state) {
	return {
		todos: getTodos(state),
	};
}

const ConnectedTodoList = connect(mapStateToProps)(TodoList);
