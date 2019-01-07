import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { doAddTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
	onAddTodo: newTodo => dispatch(doAddTodo(newTodo)),
});

const Form = ({ onAddTodo }) => {
	const name = useFormInput('');
	const description = useFormInput('');

	const newTodo = {
		id: uuid(),
		name: name.value,
		description: description.value,
	};

	const onSubmit = e => {
		e.preventDefault();
		onAddTodo(newTodo);
	};
	return (
		<form onSubmit={e => onSubmit(e)}>
			<input {...name} />
			<textarea {...description} />
			<button type="submit">Create</button>
		</form>
	);
};

// listener firm input in change
export function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	function handleChange(e) {
		setValue(e.target.value);
	}
	return {
		value,
		onChange: handleChange,
	};
}

export default connect(
	null,
	mapDispatchToProps,
)(Form);
