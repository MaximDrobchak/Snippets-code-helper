import React, { useEffect, useState } from 'react';

function setWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	// life resived method props width window event listener

	useEffect(() => {
		const handlyResize = () => setWidth(window.innerWidth); // handle listener
		// set the listener event of window
		window.addEventListener('resize', handlyResize);
		// and remove listener of window resize from current performance
		return () =>
			window.removeEventListener('resize', handlyResize);
	});
	return width;
}

// life resived method props title
function useDocumentTitle(title) {
	useEffect(() => {
		document.title = title;
	});
}

// subscribe event change inpuForm
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

export default function() {
	const name = useFormInput('Merry'); // init  state
	const surname = useFormInput('Poppins');
	const width = setWindowWidth();
	useDocumentTitle(name.value + ' ' + surname.value);

	return (
		<div>
			<input {...name} />
			<br />
			<input {...surname} />
			<hr />
			<h1>{width}</h1>
		</div>
	);
}

export class App extends React.Component {
	state = {
		width: window.innerWidth,
		name: 'Ivan',
		surname: 'Bogun',
	};

	// life resiver props method after render component
	componentDidMount() {
		document.title = this.state.name + ' ' + this.state.surname;
		window.addEventListener('resize', this.handlyResize);
	}

	// update after transform value render component
	componentDidUpdate() {
		document.title = this.state.name + ' ' + this.state.surname;
	}

	// remove listener from performance
	componentWillUnmount() {
		window.removeEventListener('resize', this.handlyResize);
	}

	// this method update state width in mount component
	handlyResize = () => this.setState({ width: window.innerWidth });

	// this method listener of inputs value and set the value in component state
	onChange = e =>
		this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div>
				<input
					placeholder="Name"
					type="text"
					name="name"
					onChange={e => this.onChange(e)}
					value={this.state.name}
				/>
				<br />
				<input
					placeholder="Surname"
					type="text"
					name="surname"
					onChange={e => this.onChange(e)}
					value={this.state.surname}
				/>
				<hr />
				<h1>{this.state.width}</h1>
			</div>
		);
	}
}
