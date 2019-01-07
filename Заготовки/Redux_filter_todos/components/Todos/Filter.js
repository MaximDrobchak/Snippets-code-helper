import React from 'react';
import * as actionsType from './constants';

const Filter = ({ onSetFilter }) => (
	<div>
		Show
		<button
			type="button"
			onClick={() => onSetFilter(actionsType.SHOW_ALL)}
		>
			All
		</button>
		<button
			type="button"
			onClick={() => onSetFilter(actionsType.SHOW_COMPLETED)}
		>
			Completed
		</button>
		<button
			type="button"
			onClick={() => onSetFilter(actionsType.SHOW_ACTIVE)}
		>
			Incompleted
		</button>
	</div>
);

export default Filter;
