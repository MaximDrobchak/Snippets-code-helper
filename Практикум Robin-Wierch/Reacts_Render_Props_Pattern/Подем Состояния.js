import React, { Component } from 'react';

const Amount = ({ amount, onIncrement, onDecrement }) => (
	<div>
		<span>Dollar: {amount}</span>

		<button type="button" onClick={onIncrement}>
			+
		</button>
		<button type="button" onClick={onDecrement}>
			+
		</button>
	</div>
);

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Euro: {amount * 0.76}</p>;

class App extends Component {
	state = {
		amount: 0,
	};

	onIncrement = () => {
		this.setState(state => ({ amount: state.amount + 1 }));
	};

	onDecrement = () => {
		this.setState(state => ({ amount: state.amount - 1 }));
	};

	render() {
		return (
			<div>
				<Amount
					amount={this.state.amount}
					onIncrement={this.onIncrement}
					onDecrement={this.onDecrement}
				/>

				<Euro amount={this.state.amount} />
				<Pound amount={this.state.amount} />
			</div>
		);
	}
}

export default App;
