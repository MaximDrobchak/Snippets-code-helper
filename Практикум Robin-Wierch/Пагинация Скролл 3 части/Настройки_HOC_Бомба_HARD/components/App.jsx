import React, { Component } from 'react';
import '../Styles/App.scss';
import {
	applyUpdateResult,
	applySetResult,
	getHackerNewsUrl,
	withInfiniteScroll,
	withPaginated,
	applySetError,
	withLoading,
	paginatedCondition,
	infiniteScrollCondition,
	loadingCondition,
} from './function';
import { compose } from 'recompose';

import List from './List';

class App extends Component {
	state = {
		hits: [],
		page: null,
		isLoading: false,
		isError: false,
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
			.then(result => this.onSetResult(result, page))
			.catch(this.onSetError);
	};

	onSetError = () => this.setState(applySetError);

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
							ref={node => (this.input = node)}
							value={this.state.value}
						/>
						<button type="submit">Search</button>
					</form>
				</div>

				<AdvancedList
					list={this.state.hits}
					isError={this.state.isError}
					isLoading={this.state.isLoading}
					page={this.state.page}
					onPaginatedSearch={this.onPaginatedSearch}
				/>
			</div>
		);
	}
}

const AdvancedList = compose(
	withPaginated(paginatedCondition),
	withInfiniteScroll(infiniteScrollCondition),
	withLoading(loadingCondition)
)(List);
export default App;
