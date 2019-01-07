import React, { useState, Fragment } from 'react';
import uuid from 'uuid/v4';

const Form = ({ onAddTodo }) => {
	const [addShow, setAddShow] = useState(false);

	const name = useFormInput('');
	const description = useFormInput('');

	const onClick = () => setAddShow(!addShow);

	const onSubmit = e => {
		e.preventDefault();

		onAddTodo({
			id: uuid(),
			name: name.value,
			description: description.value,
		});

		setAddShow(!addShow);
	};

	return (
		<Fragment>
			{addShow ? (
				<form onSubmit={e => onSubmit(e)}>
					<input {...name} />
					<br />
					<textarea {...description} />
					<br />
					<button type="submit">Add Todo</button>
				</form>
			) : (
				<button type="button" onClick={onClick}>
					Create Todo
				</button>
			)}
		</Fragment>
	);
};

function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	function handleChange(e) {
		setValue(e.target.value);
	}
	return {
		value,
		onChange: handleChange,
	};
}

export default Form;
