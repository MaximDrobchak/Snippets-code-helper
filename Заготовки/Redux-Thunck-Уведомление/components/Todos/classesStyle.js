import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4';

const Todos = ({ todos, onAddTodo }) => (
	<Fragment>
		<Forma onAddTodo={onAddTodo} />
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
			<h5>{name}</h5>
			<p>{description}</p>
		</li>
	);
};

class Forma extends Component {
	state = {
		name: '',
		description: '',
		isShow: false,
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.onAddTodo({
			id: uuid(),
			name: this.state.name,
			description: this.state.description,
		});
		this.onClick();
	};

	onClick = () => this.setState({ isShow: !this.state.isShow });

	render() {
		return (
			<Fragment>
				{this.state.isShow ? (
					<form onSubmit={e => this.onSubmit(e)}>
						<input
							type="text"
							name="name"
							onChange={e => this.onChange(e)}
							value={this.state.name}
						/>
						<textarea
							name="description"
							onChange={e => this.onChange(e)}
							value={this.state.description}
						/>
						<button type="submit">Submit</button>
					</form>
				) : (
					<button onClick={this.onClick}>Is Show</button>
				)}
			</Fragment>
		);
	}
}

export default Todos;
