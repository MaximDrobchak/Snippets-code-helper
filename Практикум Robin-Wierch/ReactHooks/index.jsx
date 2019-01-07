import React from 'react';
import Counter from './countert';
import HooksDenAbramov, { App } from './HooksDenAbramov';
import List from './list';
import Timer from './timer';

import RobertWerchuHooksAPI from './RobertWerchuHooksAPI';
const Example = () => {
	return (
		<div>
			<RobertWerchuHooksAPI />
			<hr />
			<Timer />
			<hr />
			<HooksDenAbramov />
			<Counter />
			<App />
			<hr />
			<List />
			<hr />
		</div>
	);
};
export default Example;
