import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { doToggleTodo } from '../actions';

const H4 = styled.h4`
	color: blue;

	${props =>
		props.completed &&
		css`
			text-decoration: line-through;
			color: red;
		`};
`;

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

const mapDispatchToProps = dispatch => ({
	onToggleTodo: id => dispatch(doToggleTodo(id)),
});

export default connect(
	null,
	mapDispatchToProps,
)(Todo);
