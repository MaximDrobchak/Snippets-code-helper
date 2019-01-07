import React from 'react';
import { connect } from 'react-redux';

import { doSetFilter } from './../actions/index';

const Filter = ({ onSetFilter }) => (
	<div>
		Show
		<button type="button" onClick={() => onSetFilter('SHOW_ALL')}>
			All
		</button>
		<button
			type="button"
			onClick={() => onSetFilter('SHOW_COMPLETED')}
		>
			Completed
		</button>
		<button
			type="button"
			onClick={() => onSetFilter('SHOW_INCOMPLETED')}
		>
			Incompleted
		</button>
	</div>
);

const mapDispatchToProps = dispatch => ({
	onSetFilter: filterType => dispatch(doSetFilter(filterType)),
});

export default connect(
	null,
	mapDispatchToProps,
)(Filter);
