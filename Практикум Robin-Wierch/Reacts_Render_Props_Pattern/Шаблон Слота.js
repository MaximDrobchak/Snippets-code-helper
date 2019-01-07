import React, { Component } from 'react';

const App = () => (
	<div>
		<Amount
			renderAmountOne={amount => (
				<div>
					<h1>One</h1>
					<Euro amount={amount} />
					<Pound amount={amount} />
				</div>
			)}
			renderAmountTwo={amount => (
				<div>
					<h1>Two</h1>
					<Euro amount={amount} />
					<Pound amount={amount} />
				</div>
			)}
		/>
	</div>
);

const Euro = amount => <p>Euro: {amount * 0.86}</p>;
const Pound = amount => <p>Euro: {amount * 0.76}</p>;

class Amount extends Component {
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
				<span>Dollar: {this.state.amount}</span>
				{this.props.renderAmountOne(this.state.amount)}

				<button type="button" onClick={this.onIncrement}>
					+
				</button>
				<button type="button" onClick={this.onDecrement}>
					+
				</button>

				{this.props.renderAmountTwo(this.state.amount)}
			</div>
		);
	}
}

export default App;
