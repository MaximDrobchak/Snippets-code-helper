import React, { Component } from 'react';

const App = () => <CurrenciesWithAmount />;

const Euro = amount => <p>Euro: {amount * 0.86}</p>;
const Pound = amount => <p>Euro: {amount * 0.76}</p>;

const withAmount = curencyComponents => {
	return class Amount extends Component {
		state = {
			amount: 0,
		};

		onIncrement = () => {
			this.setState(state => ({
				amount: state.amount + 1,
			}));
		};

		onDecrement = () => {
			this.setState(state => ({
				amount: state.amount - 1,
			}));
		};

		render() {
			return (
				<div>
					<span>Dollar: {this.state.amount}</span>

					<button type="button" onClick={this.onIncrement}>
						+
					</button>
					<button type="button" onClick={this.onDecrement}>
						+
					</button>

					{curencyComponents.map(CurrencyComponent => (
						<CurrencyComponent amount={this.state.amount} />
					))}
				</div>
			);
		}
	};
};

const CurrenciesWithAmount = withAmount([Euro, Pound]);
export default App;
