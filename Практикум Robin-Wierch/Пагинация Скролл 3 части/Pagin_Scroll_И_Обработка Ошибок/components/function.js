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

export const withLoading = Component => props => (
	<div>
		<Component {...props} />

		<div className="interactions">
			{props.isLoading && <span>Loading ...</span>}
		</div>
	</div>
);

export const withPaginated = Component => props => (
	<div>
		<Component {...props} />

		<div className="interactions">
			{props.page !== null &&
				!props.isLoading &&
				props.isError && (
					<div>
						<div>Someting went worong...</div>
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

export const withInfiniteScroll = Component =>
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

		onScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
					document.body.offsetHeight - 500 &&
				this.props.list.length &&
				!this.props.isLoading &&
				!this.props.isError
			) {
				this.props.onPaginatedSearch();
			}
		};

		render() {
			return <Component {...this.props} />;
		}
	};
