import React from 'react';

export const applyUpdateResult = result => prevState => ({
	hits: [...prevState.hits, ...result.hits],
	page: result.page,
	isLoading: false,
});

export const applySetResult = result => prevState => ({
	hits: result.hits,
	page: result.page,
	isLoading: false,
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
			{props.page !== null && !props.isLoading && (
				<button
					type="button"
					onClick={props.onPaginatedSearch}
				>
					More
				</button>
			)}
		</div>
	</div>
);
