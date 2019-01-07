import React, { Fragment, useState } from 'react';
import { useFormInput } from './forma';

const EditTodo = ({ todo, onEditTodo }) => {
	const [isShowEdit, setShowEdit] = useState(false);

	const name = useFormInput(todo.name);
	const description = useFormInput(todo.description);

	const onClick = e => setShowEdit(!isShowEdit);

	const onSubmit = e => {
		e.preventDefault();

		onEditTodo({
			id: todo.id,
			name: name.value,
			description: description.value,
		});

		setShowEdit(!isShowEdit);
	};

	return (
		<Fragment>
			{isShowEdit ? (
				<form onSubmit={e => onSubmit(e)}>
					<input {...name} />
					<br />
					<textarea {...description} />
					<br />
					<button type="submit">Update Todo</button>
				</form>
			) : (
				<button onClick={e => onClick(e)}>Edit Todo</button>
			)}
		</Fragment>
	);
};

export default EditTodo;
