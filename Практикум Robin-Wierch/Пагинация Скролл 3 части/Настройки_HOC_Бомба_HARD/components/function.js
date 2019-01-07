import React from 'react';

export const applyUpdateResult = result => prevState => ({
	hits: [...prevState.hits, ...result.hits],
	page: result.page,
	isError: false,
	isLoading: false,
});

export const applySetResult = result => prevState => ({
	hits: result.hits,
	page: result.page,
	isError: false,
	isLoading: false,
});

export const applySetError = prevState => ({
	isError: true,
	isLoading: true,
});

export const getHackerNewsUrl = (value, page) =>
	`https://hn.algolia.com/api/v1/search?query=${value}&page=${page}&hitsPerPage=100`;

export const withLoading = conditionFn => Component => props => (
	<div>
		<Component {...props} />

		<div className="interactions">
			{conditionFn(props) && <span>Loading...</span>}
		</div>
	</div>
);

export const withPaginated = conditionFn => Component => props => (
	<div>
		<Component {...props} />

		<div className="interactions">
			{conditionFn(props) && (
				<div>
					<div>Something went wrong...</div>
					<button
						type="button"
						onClick={props.onPaginatedSearch}
					>
						Try Again
					</button>
				</div>
			)}
		</div>
	</div>
);

export const withInfiniteScroll = conditionFn => Component =>
	class WithInfiniteScroll extends React.Component {
		componentDidMount() {
			window.addEventListener(
				'scroll',
				this.onScroll,
				false
			);
		}

		componentWillUnmount() {
			window.removeEventListener(
				'scroll',
				this.onScroll,
				false
			);
		}

		onScroll = () =>
			conditionFn(this.props) &&
			this.props.onPaginatedSearch();

		render() {
			return <Component {...this.props} />;
		}
	};

export const paginatedCondition = props =>
	props.page !== null && !props.isLoading && props.isError;

export const infiniteScrollCondition = props =>
	window.innerHeight + window.scrollY >=
		document.body.offsetHeight - 500 &&
	props.list.length &&
	!props.isLoading &&
	!props.isError;

export const loadingCondition = props => props.isLoading;
