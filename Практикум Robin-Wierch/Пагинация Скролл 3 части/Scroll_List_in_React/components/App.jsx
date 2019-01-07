import React, { Component } from 'react';
import '../Styles/App.scss';
import {
	applyUpdateResult,
	applySetResult,
	getHackerNewsUrl,
	withInfiniteScroll,
	withPaginated,
	withLoading,
} from './function';
import { compose } from 'recompose';

import List from './List';

class App extends Component {
	state = {
		hits: [],
		page: null,
		isLoading: false,
	};

	componentDidMount() {
		this.input.focus();
	}

	onInitialSearch = e => {
		e.preventDefault();

		const { value } = this.input;

		if (value === '') return;

		this.fetchStories(value, 0);
	};

	onPaginatedSearch = e =>
		this.fetchStories(
			this.input.value,
			this.state.page + 1
		);

	fetchStories = (value, page) => {
		this.setState({ isLoading: true });

		fetch(getHackerNewsUrl(value, page))
			.then(response => response.json())
			.then(result => this.onSetResult(result, page));
	};
	onSetResult = (result, page) =>
		page === 0
			? this.setState(applySetResult(result))
			: this.setState(applyUpdateResult(result));

	render() {
		return (
			<div className="page">
				<div className="interactions">
					<form
						type="submit"
						onSubmit={this.onInitialSearch}
					>
						<input
							type="text"
							onChange={event =>
								this.setState({ value: event.target.value })
							}
							value={this.state.value}
							ref={node => (this.input = node)}
						/>
						<button type="submit">Search</button>
					</form>
				</div>

				<ListWithLoadingWithInfinite
					list={this.state.hits}
					page={this.state.page}
					isLoading={this.state.isLoading}
					onPaginatedSearch={this.onPaginatedSearch}
				/>
			</div>
		);
	}
}

const ListWithLoadingWithInfinite = compose(
	// withPaginated,
	withInfiniteScroll,
	withLoading
)(List);
export default App;
